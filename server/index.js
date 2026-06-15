require('dotenv/config');
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');
const mime = require('mime-types');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  if (req.path.endsWith('.js')) {
    res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
  } else if (req.path.endsWith('.mjs')) {
    res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
  } else if (req.path.endsWith('.css')) {
    res.setHeader('Content-Type', 'text/css; charset=utf-8');
  } else if (req.path.endsWith('.json')) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
  } else if (req.path.endsWith('.wasm')) {
    res.setHeader('Content-Type', 'application/wasm');
  }
  next();
});

// Debug endpoint — access this to see paths
app.get('/api/debug', (_req, res) => {
  const distPath = path.join(__dirname, '..');
  const indexPath = path.join(distPath, 'index.html');
  res.json({
    nodeEnv: process.env.NODE_ENV,
    __dirname: __dirname,
    distPath: distPath,
    distExists: fs.existsSync(distPath),
    indexExists: fs.existsSync(indexPath),
    distFiles: fs.existsSync(distPath) ? fs.readdirSync(distPath) : [],
  });
});

// API routes
app.post('/api/verify-payment', async (req, res) => {
  try {
    const { reference } = req.body;

    if (!reference) {
      return res.status(400).json({ success: false, message: 'Missing payment reference' });
    }

    const paystackRes = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await paystackRes.json();

    if (!data.status) {
      return res.status(400).json({ success: false, message: data.message || 'Paystack verification failed' });
    }

    if (data.data.status !== 'success') {
      return res.status(400).json({
        success: false,
        message: `Payment status is "${data.data.status}", not "success"`,
        data: { status: data.data.status },
      });
    }

    return res.json({
      success: true,
      data: {
        status: data.data.status,
        amount: data.data.amount,
        currency: data.data.currency,
        email: data.data.customer?.email,
        paidAt: data.data.paid_at,
        reference: data.data.reference,
        channel: data.data.channel,
      },
    });
  } catch (err) {
    console.error('verify-payment error:', err);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

const distPath = path.join(__dirname, '..', 'dist');
app.use((req, res, next) => {
  if (req.method !== 'GET') return next();
  const filePath = path.join(distPath, req.path, 'index.html');
  if (req.path !== '/' && fs.existsSync(filePath)) {
    return res.sendFile(filePath);
  }
  next();
});
app.use(express.static(distPath, {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.js') || filePath.endsWith('.mjs')) {
      res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
    } else if (filePath.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css; charset=utf-8');
    } else if (filePath.endsWith('.json')) {
      res.setHeader('Content-Type', 'application/json; charset=utf-8');
    }
  },
}));
app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log('Server running on http://localhost:' + PORT);
  console.log('Serving dist from: ' + distPath);
});

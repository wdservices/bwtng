import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import type { ViteReactSSGOptions } from 'vite-react-ssg'
import path from 'path'
import fs from 'fs'

const blogDir = path.resolve(__dirname, './src/data/blog-posts')
const blogFiles = fs.readdirSync(blogDir).filter(f => f.endsWith('.json'))
const blogSlugs = blogFiles.map(f => {
  const data = JSON.parse(fs.readFileSync(path.join(blogDir, f), 'utf-8'))
  return `/blog/${data.slug}`
})

const devApiPlugin = () => ({
  name: 'dev-api-middleware',
  configureServer(server: any) {
    server.middlewares.use((req: any, res: any, next: any) => {
      const url = req.url || '';
      if (!url.startsWith('/api/')) return next();

      if (url === '/api/health') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ status: 'ok' }));
        return;
      }

      if (url.startsWith('/api/blog-views/')) {
        const slug = url.replace('/api/blog-views/', '').split('?')[0];
        const viewsFile = path.resolve(__dirname, './server/blog-views.json');
        let views: Record<string, number> = {};
        try {
          if (fs.existsSync(viewsFile)) {
            views = JSON.parse(fs.readFileSync(viewsFile, 'utf-8'));
          }
        } catch {}

        if (req.method === 'POST') {
          views[slug] = (views[slug] || 0) + 1;
          try {
            fs.writeFileSync(viewsFile, JSON.stringify(views, null, 2));
          } catch {}
        }
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ slug, views: views[slug] || 0 }));
        return;
      }

      if (url === '/api/verify-payment' && req.method === 'POST') {
        let body = '';
        req.on('data', (chunk: any) => { body += chunk; });
        req.on('end', async () => {
          try {
            const { reference } = JSON.parse(body || '{}');
            if (!reference) {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, message: 'Missing payment reference' }));
              return;
            }
            const secretKey = process.env.PAYSTACK_SECRET_KEY;
            if (secretKey) {
              const paystackRes = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, {
                headers: {
                  Authorization: `Bearer ${secretKey}`,
                  'Content-Type': 'application/json',
                },
              });
              const data = await paystackRes.json();
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify(data));
              return;
            }
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({
              success: true,
              data: {
                status: 'success',
                amount: 5000000,
                currency: 'NGN',
                reference,
                paidAt: new Date().toISOString(),
              },
            }));
          } catch (err: any) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: false, message: err?.message || 'Server error' }));
          }
        });
        return;
      }

      next();
    });
  },
});

export default defineConfig({
  plugins: [react(), devApiPlugin()],
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('firebase')) return 'firebase';
            if (id.includes('framer-motion')) return 'motion';
            if (id.includes('react-dom') || id.includes('react-router')) return 'vendor';
          }
        },
      },
    },
  },
  ssr: {
    noExternal: ['react-helmet-async'],
  },
  ssgOptions: {
    dirStyle: 'nested',
    includedRoutes: () => [
      '/', '/about-us', '/services', '/portfolio', '/pricing',
      '/testimonials', '/faqs', '/contact', '/blog',
      '/web-development', '/mobile-app-development', '/seo-services',
      '/branding', '/ui-ux-design', '/business-consultation',
      '/digital-marketing', '/digital-tools', '/ai-services',
      '/ai-builder-academy', '/academy/register',
      '/ship-it-right',
      ...blogSlugs,
    ],
  },
})

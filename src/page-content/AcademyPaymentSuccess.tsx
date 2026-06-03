import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Loader2, CheckCircle2, MessageCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export default function AcademyPaymentSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const registrationData = location.state?.registrationData || {};
  const cohort = location.state?.cohort || null;
  const paymentVerified = location.state?.paymentVerified || false;
  const reference = new URLSearchParams(window.location.search).get('reference');
  const email = new URLSearchParams(window.location.search).get('email');

  useEffect(() => {
    // Show success message immediately since verification happened in payment page
    if (!paymentVerified) {
      setError('Payment verification status not found');
    }
  }, [paymentVerified]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-6">
        <div className="text-center text-destructive">
          <h2 className="text-xl font-semibold mb-4">Payment Verification Failed</h2>
          <p className="mb-4">{error}</p>
          <div className="space-y-4">
            <Button variant="outline" onClick={() => {
              navigate('/academy/payment', { 
                state: { registrationData, cohort } 
              }); 
            }}>
              Try Payment Again
            </Button>
            <Button onClick={() => {
              navigate('/ai-builder-academy');
            }}>
              Back to Academy
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="text-center space-y-6">
        <div className="mx-auto w-20 h-20 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mb-5">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-2xl font-semibold font-display mb-2 tracking-tight">Payment Successful!</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Onboarding details will arrive via WhatsApp and email within 24 hours.
        </p>
        {cohort?.whatsappGroupLink && (
          <Button 
            onClick={() => window.open(cohort.whatsappGroupLink, '_blank')}
            className="w-full h-12 rounded-xl bg-[#25D366] hover:bg-[#1ebe5a] text-white font-medium"
          >
            <MessageCircle className="w-4 h-4 mr-2" /> Join WhatsApp Group
          </Button>
        )}
        <Button 
          onClick={() => {
            navigate('/ai-builder-academy');
          }}
          className="w-full mt-4 h-12 rounded-xl bg-muted/50 hover:bg-muted/100 text-foreground font-medium"
        >
          Back to Academy
        </Button>
      </div>
    </div>
  );
}
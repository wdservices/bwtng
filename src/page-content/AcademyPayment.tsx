import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { getActiveCohort } from '@/services/academyService';
import { Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { createRegistration } from '@/services/academyService';
import { createPaymentRecord } from '@/services/paymentService';

export default function AcademyPayment() {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cohort, setCohort] = useState<any>(null);

  // Registration data passed from AcademyRegister via state
  const state = location.state as any || {};
  const registrationData = state.registrationData || {};
  const cohortFromState = state.cohort;

  useEffect(() => {
    const loadCohort = async () => {
      try {
        // Prefer cohort from navigation state, fall back to Firestore
        if (cohortFromState) {
          setCohort(cohortFromState);
        } else {
          const c = await getActiveCohort();
          if (!c) {
            setError('No active cohort found');
            return;
          }
          setCohort(c);
        }
      } catch (err) {
        console.error(err);
        setError('Failed to load cohort details');
      } finally {
        setLoading(false);
      }
    };

    loadCohort();
  }, []);

  useEffect(() => {
    if (!loading && cohort && registrationData.fullName) {
      // Initialize Paystack payment
      initializePaystackPayment();
    }
  }, [loading, cohort, registrationData]);

  const handlePaystackCallback = (response: any) => {
    verifyPayment(response.reference, registrationData, cohort);
  };

  const initializePaystackPayment = () => {
    const amount = Math.round(((state.price ?? (() => {
      const now = new Date();
      const deadline = cohort.registrationDeadline ? new Date(cohort.registrationDeadline) : null;
      if (deadline && now <= deadline) {
        return cohort.earlyBirdPrice || 50000;
      }
      return cohort.regularPrice || 55000;
    })()) * 100));

    const paystackOptions = {
      key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY as string,
      email: registrationData.email,
      amount,
      currency: "NGN",
      ref: `AAB-${Date.now()}`,
      metadata: {
        fullName: registrationData.fullName,
        whatsapp: registrationData.whatsappNumber,
        country: registrationData.country,
        cohort: cohort.name
      },
      callback: handlePaystackCallback,
      onClose: function () {
        toast({ title: 'Payment cancelled', description: 'You cancelled the payment.', variant: 'destructive' });
        navigate(-1);
      }
    };

    if ((window as any).PaystackPop) {
      (window as any).PaystackPop.setup(paystackOptions).openIframe();
    } else {
      const script = document.createElement('script');
      script.src = 'https://js.paystack.co/v1/inline.js';
      script.onload = () => {
        (window as any).PaystackPop.setup(paystackOptions).openIframe();
      };
      script.onerror = () => {
        setError('Failed to load payment gateway');
        setLoading(false);
      };
      document.body.appendChild(script);
    }
  };

  // Verify payment with backend
  const verifyPayment = async (reference: string, registrationData: any, cohort: any) => {
    try {
      // Verify payment with your backend endpoint
      const response = await fetch(`/api/verify-payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reference, email: registrationData.email }),
      });

      const result = await response.json();

      if (result.success && result.data.status === 'success') {
        // Save registration to Firestore
        try {
          await createRegistration({
            cohortId: cohort.id,
            cohortName: cohort.name,
            fullName: registrationData.fullName,
            email: registrationData.email,
            whatsappNumber: registrationData.whatsappNumber,
            country: registrationData.country,
            skillLevel: registrationData.skillLevel,
            motivation: registrationData.motivation,
            paymentStatus: 'paid',
            paymentReference: reference,
            amount: result.data.amount / 100, // Convert from kobo to Naira
          });

          // Save payment record
          await createPaymentRecord({
            reference,
            amount: result.data.amount / 100,
            email: registrationData.email,
            status: 'success',
            gateway: 'paystack',
            paidAt: new Date(),
            metadata: {
              cohortId: cohort.id,
              cohortName: cohort.name,
              fullName: registrationData.fullName,
              whatsappNumber: registrationData.whatsappNumber,
              country: registrationData.country,
              skillLevel: registrationData.skillLevel,
              motivation: registrationData.motivation
            }
          });

          // Redirect to success page
          navigate(`/academy/payment/success?reference=${reference}&email=${registrationData.email}`, { 
            state: { 
              registrationData,
              cohort,
              paymentVerified: true 
            } 
          });
        } catch (firestoreError) {
          console.error('Firestore error:', firestoreError);
          toast({ title: 'Payment verified but failed to save registration', description: 'Please contact support.', variant: 'destructive' });
          navigate(-1);
        }
      } else {
        toast({ title: 'Payment verification failed', description: 'Please contact support if you were charged.', variant: 'destructive' });
        navigate(-1);
      }
    } catch (err) {
      console.error(err);
      toast({ title: 'Payment verification failed', description: 'Please contact support if you were charged.', variant: 'destructive' });
      navigate(-1);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="w-10 h-10 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-6">
        <div className="text-center text-destructive">
          <h2 className="text-xl font-semibold mb-4">Payment Initialization Error</h2>
          <p className="mb-4">{error}</p>
          <Button variant="outline" onClick={() => navigate(-1)}>Back to Registration</Button>
        </div>
      </div>
    );
  }

  return null; // Payment initialization happens in useEffect
}
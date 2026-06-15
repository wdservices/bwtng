import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';


const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'What services does Bluewaves Technology provide?',
      answer: 'We provide a wide range of digital services including web development, mobile app development, AI & machine learning solutions, SEO services, digital marketing, UI/UX design, and business consultation.'
    },
    {
      question: 'Do you offer website development in Nigeria?',
      answer: 'Yes! We are a Nigeria-based company specializing in professional website development for businesses of all sizes across Nigeria and beyond.'
    },
    {
      question: 'How much does a business website cost?',
      answer: 'The cost of a website varies depending on your specific requirements, features, and complexity. Contact us for a free quote tailored to your needs.'
    },
    {
      question: 'Do you provide SEO services?',
      answer: 'Absolutely! We offer comprehensive SEO services to help improve your search rankings, drive organic traffic, and grow your online presence.'
    },
    {
      question: 'Can Bluewaves Technology develop mobile applications?',
      answer: 'Yes! We develop both native and cross-platform mobile applications for iOS and Android platforms.'
    },
    {
      question: 'How long does website development take?',
      answer: 'Project timelines vary based on scope and complexity. A typical business website takes 2-6 weeks, while more complex projects may take longer.'
    }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Frequently Asked Questions | Bluewaves Technology Nigeria</title>
        <meta name="description" content="Find answers to common questions about Bluewaves Technology's web development, mobile app, AI, SEO and branding services in Nigeria." />
        <meta name="keywords" content="Bluewaves Technology FAQ, web development questions Nigeria, how long does website take Nigeria" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.bwtng.live/faqs" />
        <meta property="og:title" content="Frequently Asked Questions | Bluewaves Technology Nigeria" />
        <meta property="og:description" content="Find answers to common questions about Bluewaves Technology's web development, mobile app, AI, SEO and branding services in Nigeria." />
        <meta property="og:url" content="https://www.bwtng.live/faqs" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.bwtng.live/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Frequently Asked Questions | Bluewaves Technology Nigeria" />
        <meta name="twitter:description" content="Find answers to common questions about Bluewaves Technology's web development, mobile app, AI, SEO and branding services in Nigeria." />
        <meta name="twitter:image" content="https://www.bwtng.live/og-image.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services does Bluewaves Technology provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We provide web development, mobile app development, AI solutions, SEO services, digital marketing, UI/UX design, and business consultation."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer website development in Nigeria?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We are a Nigeria-based company specializing in professional website development for businesses of all sizes across Nigeria and beyond."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a business website cost in Nigeria?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Starter websites cost between ₦650,000 and ₦800,000. Business websites cost between ₦850,000 and ₦1,500,000. Enterprise and custom solutions are quoted based on project requirements."
          }
        },
        {
          "@type": "Question",
          "name": "How long does website development take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A typical business website takes 2-6 weeks. More complex custom projects may take longer depending on scope and features."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide SEO services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We offer comprehensive SEO services to help improve your search rankings, drive organic traffic, and grow your online presence in Nigeria and globally."
          }
        },
        {
          "@type": "Question",
          "name": "Can Bluewaves Technology develop mobile applications?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes! We develop both native and cross-platform mobile applications for iOS and Android platforms using React Native, Flutter, Swift, and Kotlin."
          }
        }
      ]
    }` }} />
      </Helmet>
      <Header />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our services and processes.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between"
                >
                  <span className="font-semibold text-lg">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 text-muted-foreground">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default FAQs;

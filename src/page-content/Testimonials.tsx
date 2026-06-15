import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';


const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Mr. Chukwuemeka',
      company: 'Anaco Prime Sport',
      content: 'Bluewaves Technology transformed our sports management system completely. Their team understood our unique needs and delivered a solution that exceeded our expectations. Highly professional and reliable!',
      rating: 5
    },
    {
      name: 'Mrs. Adebayo',
      company: 'Golden Tulip Hotel',
      content: 'Working with Bluewaves was an absolute pleasure. They developed our hotel booking platform and the results are fantastic. Our online bookings have increased by over 200%!',
      rating: 5
    },
    {
      name: 'Engr. Williams',
      company: 'Oak Park and Gardens',
      content: 'The custom management system they built for our real estate business has streamlined all our operations. Their attention to detail and technical expertise is outstanding.',
      rating: 5
    },
    {
      name: 'Dr. Amara',
      company: 'EmergenSee',
      content: 'Bluewaves Technology developed our emergency response app and it has saved lives. Their commitment to quality and timely delivery is unmatched. We couldn\'t ask for a better partner.',
      rating: 5
    },
    {
      name: 'Chef Ifeoma',
      company: 'BakeBook',
      content: 'As a baker, I needed an app to organize my recipes and BakeBook has been perfect! The team at Bluewaves was patient, creative, and truly understood what I needed. Love it!',
      rating: 5
    },
    {
      name: 'Mr. Okafor',
      company: 'Megavantage Dynamic',
      content: 'Professional, reliable, and highly skilled. Bluewaves Technology delivered our business software on time and within budget. Their post-launch support is also excellent.',
      rating: 5
    }
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Client Testimonials | Reviews of Bluewaves Technology Nigeria</title>
        <meta name="description" content="See what our clients say about Bluewaves Technology. Real reviews from businesses across Nigeria including Golden Tulip, EmergenSee and more." />
        <meta name="keywords" content="Bluewaves Technology reviews, client testimonials Nigeria, software company reviews Port Harcourt" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.bwtng.live/testimonials" />
        <meta property="og:title" content="Client Testimonials | Reviews of Bluewaves Technology Nigeria" />
        <meta property="og:description" content="See what our clients say about Bluewaves Technology. Real reviews from businesses across Nigeria including Golden Tulip Hotel, EmergenSee, Oak Park and Gardens and more." />
        <meta property="og:url" content="https://www.bwtng.live/testimonials" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.bwtng.live/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Client Testimonials | Reviews of Bluewaves Technology Nigeria" />
        <meta name="twitter:description" content="See what our clients say about Bluewaves Technology. Real reviews from businesses across Nigeria including Golden Tulip Hotel, EmergenSee, Oak Park and Gardens and more." />
        <meta name="twitter:image" content="https://www.bwtng.live/og-image.png" />
      </Helmet>
      <Header />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Testimonials</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="text-primary">Clients Say</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it - hear from our satisfied clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card p-8 rounded-2xl border border-border"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 text-lg italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Testimonials;

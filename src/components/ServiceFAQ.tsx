import React from 'react';
import { Head as Helmet } from 'vite-react-ssg';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export interface ServiceFAQItem {
  question: string;
  answer: string;
}

const DEFAULT_SERVICE_FAQS: Record<string, { heading: string; faqs: ServiceFAQItem[] }> = {
  'web-development': {
    heading: 'Web Development Frequently Asked Questions',
    faqs: [
      {
        question: 'How long does it take to develop a custom web platform?',
        answer: 'Typical commercial web platforms and client portals take between 2 to 6 weeks depending on workflow complexity. We work in rapid two-week agile sprints with bi-weekly live staging demos so you can test features as they are built.',
      },
      {
        question: 'What technology stack do you use for web development?',
        answer: 'We build with React 19, Next.js 15 (App Router), TypeScript, Tailwind CSS, and PostgreSQL / Cloud SQL. This ensures sub-second Core Web Vitals, extreme reliability, and future-proof scalability.',
      },
      {
        question: 'Do you integrate local and global payment gateways?',
        answer: 'Yes. We natively integrate Paystack, Flutterwave, Stripe, and direct bank transfers with automated webhook reconciliation, instant receipt generation, and fraud checks.',
      },
      {
        question: 'Who owns the intellectual property and source code?',
        answer: 'You own 100% of all intellectual property, source code, database schemas, and assets. Upon project completion, full repository access and cloud credentials are transferred to your organization.',
      },
    ],
  },
  'mobile-app-development': {
    heading: 'Mobile App Development Frequently Asked Questions',
    faqs: [
      {
        question: 'Do you build apps for both iOS and Android?',
        answer: 'Yes. We build high-performance mobile applications using React Native and Flutter with native Swift and Kotlin bridges, delivering identical 60–120 FPS fluid experiences across both Apple iOS and Google Android.',
      },
      {
        question: 'Can our mobile app work without an active internet connection?',
        answer: 'Yes. We engineer offline-first architectures using local SQLite / WatermelonDB storage. Users can enter data, read records, and interact with the app offline, and changes synchronize automatically when connectivity returns.',
      },
      {
        question: 'Do you handle the Apple App Store and Google Play submission process?',
        answer: 'Yes. We handle the entire release lifecycle: code signing, provisioning profiles, privacy manifest compliance, App Store screenshots, and review guidelines adherence with a zero-rejection policy.',
      },
      {
        question: 'How are push notifications handled?',
        answer: 'We integrate Firebase Cloud Messaging (FCM) and Apple APNs with segmented user topic broadcasting, automated transaction alerts, and rich media interactive push notifications.',
      },
    ],
  },
  'ai-services': {
    heading: 'AI & Machine Learning Frequently Asked Questions',
    faqs: [
      {
        question: 'How do you prevent hallucinations in corporate AI applications?',
        answer: 'We architect enterprise Retrieval-Augmented Generation (RAG) vector pipelines. Instead of letting models guess, we ground responses strictly within your verified company documents and databases with source citations.',
      },
      {
        question: 'Is our sensitive company data kept private and confidential?',
        answer: 'Yes. We enforce zero data retention policies with foundation model APIs. Your proprietary documents and customer records are never used to train public models, and all datastores employ AES-256 encryption at rest.',
      },
      {
        question: 'What foundation models do you support?',
        answer: 'We architect across Google Gemini 2.5 (Flash and Pro), OpenAI GPT-4o, and Anthropic Claude 3.5 Sonnet, matching the optimal cost, speed, and context window requirements for each workflow.',
      },
    ],
  },
  'seo-services': {
    heading: 'Technical SEO Frequently Asked Questions',
    faqs: [
      {
        question: 'How quickly do technical SEO improvements show on Google?',
        answer: 'Technical crawl optimizations and Core Web Vitals speed improvements typically register in Google Search Console within 7 to 14 days. Measurable ranking and organic impression growth commonly scales over 4 to 8 weeks.',
      },
      {
        question: 'What is Core Web Vitals optimization?',
        answer: 'Core Web Vitals are Google’s official ranking metrics assessing Largest Contentful Paint (LCP < 2.5s), Cumulative Layout Shift (CLS < 0.1), and Interaction to Next Paint (INP < 200ms). We optimize code to score 95+ on Lighthouse.',
      },
      {
        question: 'Do you provide local SEO for Port Harcourt and Nigerian businesses?',
        answer: 'Yes. We optimize Google Business Profiles, implement local schema geo-coordinates, and build localized citation footprints to dominate competitive local searches across Port Harcourt, Rivers State, and Nigeria.',
      },
    ],
  },
  'branding': {
    heading: 'Branding & Visual Identity Frequently Asked Questions',
    faqs: [
      {
        question: 'What is included in the brand identity package?',
        answer: 'You receive primary and secondary logo vector suites (SVG, EPS, PNG, PDF), a comprehensive brand guidelines manual, typography pairings, color systems (Pantone, CMYK, RGB), and branded digital collateral.',
      },
      {
        question: 'Can we trademark and copyright the logo designs?',
        answer: 'Yes. All logo geometry and visual marks are created 100% from scratch. Upon project sign-off, full commercial copyright is assigned to your business for trademark registration.',
      },
      {
        question: 'How long does the branding process take?',
        answer: 'A comprehensive corporate brand identity typically takes 10 to 14 business days, progressing through concept moodboards, logo lockups, typography scales, and final asset delivery.',
      },
    ],
  },
  'ui-ux-design': {
    heading: 'UI/UX Design Frequently Asked Questions',
    faqs: [
      {
        question: 'Do you provide editable Figma design files?',
        answer: 'Yes. You receive full ownership of the source Figma project, including atomic design components, auto-layout variants, variables, responsive breakpoints, and developer inspection tokens.',
      },
      {
        question: 'How do you ensure user experience usability?',
        answer: 'We conduct cognitive walkthroughs, test interactive prototypes against human thumb zones and screen contrast standards (WCAG 2.1 AA), and validate user journey steps to eliminate checkout/onboarding friction.',
      },
      {
        question: 'Can you work with our existing development team?',
        answer: 'Yes. We provide clear design token specifications, CSS variables, and interactive prototypes with developer documentation for smooth implementation in React, Vue, or mobile frameworks.',
      },
    ],
  },
  'business-consultation': {
    heading: 'Technology Consultation Frequently Asked Questions',
    faqs: [
      {
        question: 'What is the deliverable of an architectural consultation?',
        answer: 'You receive a complete Software Requirement Specification (SRS) document, Entity Relationship Diagrams (ERD), API integration boundaries, cloud infrastructure cost estimates, and sprint timelines.',
      },
      {
        question: 'Can you help audit an existing problematic codebase?',
        answer: 'Yes. We perform comprehensive technical audits covering database bottlenecks, OWASP security vulnerabilities, code maintainability, and infrastructure cost optimization.',
      },
      {
        question: 'How do we schedule a consultation?',
        answer: 'You can connect directly with our principal architects via WhatsApp or phone to schedule an exploratory 45-minute discovery session.',
      },
    ],
  },
  'digital-marketing': {
    heading: 'Digital Marketing Frequently Asked Questions',
    faqs: [
      {
        question: 'How do you ensure accurate ad attribution with iOS tracking restrictions?',
        answer: 'We implement server-side Meta Conversions API (CAPI) and Google Tag Manager Server Containers. This bypasses client-side ad blockers and delivers 99%+ accurate purchase attribution.',
      },
      {
        question: 'What advertising platforms do you manage?',
        answer: 'We manage performance campaigns across Meta Ads (Instagram & Facebook), Google Search & Performance Max, LinkedIn Sponsored Content, and automated email/SMS retention funnels.',
      },
      {
        question: 'How do you measure campaign success?',
        answer: 'We track quantifiable commercial metrics: Cost Per Acquisition (CPA), Return On Ad Spend (ROAS), Customer Lifetime Value (LTV), and bottom-line revenue generated.',
      },
    ],
  },
  'digital-tools': {
    heading: 'Custom Digital Tools Frequently Asked Questions',
    faqs: [
      {
        question: 'Can you replace our spreadsheet workflows with custom software?',
        answer: 'Yes. We engineer tailored administrative web portals and internal tools that eliminate duplicate data entry, enforce role-based access control, and automate invoice and PDF generation.',
      },
      {
        question: 'Where is our company data hosted?',
        answer: 'Your data can be deployed to dedicated cloud Virtual Private Clouds (AWS, GCP, or DigitalOcean) or on-premise servers with automated encrypted daily backups and full data sovereignty.',
      },
      {
        question: 'Do you offer ongoing software maintenance and version updates?',
        answer: 'Yes. Every custom software deployment includes a warranty period, and we offer dedicated Service Level Agreements (SLAs) covering 24/7 uptime monitoring, security patches, and feature upgrades.',
      },
    ],
  },
};

interface ServiceFAQProps {
  faqs?: ServiceFAQItem[];
  pageUrl?: string;
  heading?: string;
  subheading?: string;
  serviceName?: string;
}

const ServiceFAQ: React.FC<ServiceFAQProps> = ({
  faqs,
  pageUrl = 'https://www.bwtng.live/services',
  heading,
  subheading = 'Quick answers to the questions we hear most from clients.',
  serviceName,
}) => {
  const resolvedData = serviceName && DEFAULT_SERVICE_FAQS[serviceName]
    ? DEFAULT_SERVICE_FAQS[serviceName]
    : {
        heading: heading || 'Frequently Asked Questions',
        faqs: faqs || [],
      };

  const finalHeading = heading || resolvedData.heading;
  const finalFaqs = faqs && faqs.length > 0 ? faqs : resolvedData.faqs;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: finalFaqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  return (
    <div className="max-w-3xl mx-auto mb-20">
      <Helmet>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Helmet>

      <div className="text-center mb-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4">
          FAQ
        </span>
        <h2 className="text-3xl font-bold mb-3">{finalHeading}</h2>
        <p className="text-muted-foreground text-lg">{subheading}</p>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {finalFaqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-card border border-border rounded-2xl px-6 data-[state=open]:border-primary/50 data-[state=open]:glow-sm transition-all"
          >
            <AccordionTrigger className="text-left text-base md:text-lg font-semibold py-5 hover:no-underline [&[data-state=open]]:text-primary">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ServiceFAQ;

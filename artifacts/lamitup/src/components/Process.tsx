import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
  {
    num: 1,
    title: 'Understand Your Business',
    desc: 'Deep-dive into your product, market, competitive landscape, and current sales motion.',
  },
  {
    num: 2,
    title: 'Define Your ICP',
    desc: 'Build precise Ideal Customer Profiles and buyer personas backed by real market data.',
  },
  {
    num: 3,
    title: 'Build Outreach Infrastructure',
    desc: 'Set up email domains, sequences, CRM integrations, and data pipelines from scratch.',
  },
  {
    num: 4,
    title: 'Launch Campaigns',
    desc: 'Execute personalized, multi-channel outreach across email, LinkedIn, and phone.',
  },
  {
    num: 5,
    title: 'Book Meetings',
    desc: 'Convert prospects into qualified sales conversations — directly onto your calendar.',
  },
  {
    num: 6,
    title: 'Optimize Weekly',
    desc: 'Review metrics, refine messaging, and compound learnings into better results every week.',
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="how-it-works"
      className="py-24 lg:py-32 bg-white"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4 inline-block px-3 py-1.5 rounded"
            style={{
              color: '#D4FE01',
              backgroundColor: '#0B1026',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            The Process
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight"
            style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
          >
            How We Build Your Growth Engine
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line — desktop */}
          <div
            className="absolute left-8 top-0 bottom-0 w-px hidden lg:block"
            style={{ backgroundColor: '#E3E5E8' }}
          />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex gap-8 items-start"
                data-testid={`process-step-${i}`}
              >
                {/* Step number bubble */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-black border-4 border-white"
                    style={{
                      backgroundColor: i < 5 ? '#0B1026' : '#D4FE01',
                      color: i < 5 ? '#D4FE01' : '#0B1026',
                      fontFamily: 'Bricolage Grotesque, sans-serif',
                      boxShadow: '0 0 0 4px white',
                    }}
                  >
                    {step.num}
                  </div>
                </div>

                {/* Content */}
                <div
                  className="flex-1 p-6 rounded-xl hover-lift"
                  style={{
                    backgroundColor: '#F5F5F7',
                    border: '1px solid #E3E5E8',
                    marginTop: 8,
                  }}
                >
                  <h3
                    className="font-bold text-black mb-2"
                    style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontSize: 18 }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: '#6B7280', fontFamily: 'Inter, sans-serif' }}
                  >
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mid CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-16"
        >
          <a
            href="https://calendly.com/lamitup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 rounded-xl text-base font-bold transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              backgroundColor: '#D4FE01',
              color: '#0B1026',
              fontFamily: 'Inter, sans-serif',
            }}
            data-testid="process-cta"
          >
            Let's Scale My Pipeline
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

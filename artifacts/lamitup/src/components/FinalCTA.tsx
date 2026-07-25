import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      className="py-28 lg:py-40 relative overflow-hidden"
      style={{ backgroundColor: '#0B1026' }}
      ref={ref}
    >
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Radial lime glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(212,254,1,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Corner accents */}
      <div
        className="absolute top-0 left-0 w-64 h-64 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 0% 0%, rgba(212,254,1,0.08) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 100% 100%, rgba(212,254,1,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-5"
            style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
          >
            Ready to Build an Outbound System{' '}
            <span style={{ color: '#D4FE01' }}>That Actually Works?</span>
          </h2>

          <p
            className="text-xl md:text-2xl font-semibold mb-12"
            style={{ color: 'rgba(255,255,255,0.55)', fontFamily: 'Inter, sans-serif' }}
          >
            Stop guessing. Start building.
          </p>

          <motion.a
            href="https://calendly.com/lamitup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-5 rounded-xl text-lg font-bold transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              backgroundColor: '#D4FE01',
              color: '#0B1026',
              fontFamily: 'Inter, sans-serif',
              boxShadow: '0 0 60px rgba(212,254,1,0.25)',
            }}
            whileHover={{ boxShadow: '0 0 80px rgba(212,254,1,0.35)' }}
            data-testid="final-cta"
          >
            Book Your Free Consultation
            <svg className="ml-3 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-2 mt-10"
          >
            {['No long contracts', 'No fluff', 'Just predictable pipeline'].map((signal, i) => (
              <span key={signal} className="flex items-center">
                <span
                  className="text-sm font-medium"
                  style={{ color: 'rgba(255,255,255,0.65)', fontFamily: 'Inter, sans-serif' }}
                >
                  {signal}
                </span>
                {i < 2 && (
                  <span
                    className="mx-4 w-1.5 h-1.5 rounded-full inline-block"
                    style={{ backgroundColor: '#D4FE01' }}
                  />
                )}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

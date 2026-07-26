import { motion } from 'framer-motion'

const CTA_URL = 'https://calendly.com/lamitup'

const trustPoints = [
  'No long contracts',
  'No fluff',
  'Just predictable pipeline',
]

export default function FinalCTA() {
  return (
    <section id="cta" className="relative bg-[#0B1026] py-32 px-6 overflow-hidden">
      {/* Radial lime glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#D4FE01]/10 blur-[100px]" />
      </div>

      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span className="text-[#D4FE01] text-xs font-bold uppercase tracking-widest">
            Ready to Start?
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' as const }}
          className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-6"
        >
          Ready to Build an Outbound System That Actually Works?
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' as const }}
          className="text-white/50 text-xl mb-10"
        >
          Stop guessing. Start building.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' as const }}
          className="mb-10"
        >
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#D4FE01] hover:bg-[#c4ee00] text-[#0B1026] font-bold text-lg px-10 py-5 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-[#D4FE01]/25 lime-glow"
          >
            Book Your Free Consultation
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' as const }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0"
        >
          {trustPoints.map((point, i) => (
            <span key={point} className="flex items-center gap-2 text-white/40 text-sm font-medium">
              {i > 0 && <span className="hidden sm:block w-1 h-1 rounded-full bg-[#D4FE01]/40 mx-3" />}
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4FE01]/40 sm:hidden" />
              {point}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

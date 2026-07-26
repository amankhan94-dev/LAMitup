import { motion } from 'framer-motion'

const CTA_URL = 'https://calendly.com/lamitup'

const pipelineSteps = [
  { label: 'Data', icon: '◈' },
  { label: 'AI', icon: '◉' },
  { label: 'Email', icon: '◆' },
  { label: 'Calls', icon: '◎' },
  { label: 'Meetings', icon: '◈' },
  { label: 'Pipeline', icon: '◉' },
  { label: 'Revenue', icon: '★' },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: 'easeOut' as const },
})

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#0B1026] flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[#D4FE01]/8 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 mb-8">
          <span className="flex items-center gap-2 border border-[#D4FE01]/30 bg-[#D4FE01]/10 text-[#D4FE01] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4FE01] inline-block animate-pulse" />
            The Outbound Operating System for B2B Tech
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.2)}
          className="font-display font-extrabold text-4xl sm:text-6xl lg:text-[82px] xl:text-[88px] leading-[1.04] tracking-tight text-white mb-6"
        >
          Build an Outreach Engine That{' '}
          <span className="text-[#D4FE01]">Books Meetings</span>{' '}
          While You Focus on Closing Deals.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.32)}
          className="max-w-2xl mx-auto text-white/60 text-lg sm:text-xl leading-relaxed mb-10"
        >
          We design, build and operate complete B2B outbound systems — from data and AI workflows
          to outreach, telecalling, follow-ups and conversion — so technology companies consistently
          generate qualified sales conversations.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.44)}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
        >
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#D4FE01] hover:bg-[#c4ee00] text-[#0B1026] font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-[#D4FE01]/30"
          >
            Book a Free Strategy Call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#solution"
            onClick={(e) => { e.preventDefault(); document.querySelector('#solution')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 hover:bg-white/5"
          >
            See How It Works
          </a>
        </motion.div>

        {/* Pipeline Flow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' as const }}
          className="animate-float"
        >
          <div className="relative flex items-center justify-center gap-0 flex-wrap sm:flex-nowrap">
            {pipelineSteps.map((step, i) => (
              <div key={step.label} className="flex items-center">
                {/* Node */}
                <div
                  className="flex flex-col items-center gap-1.5 group"
                  style={{ animationDelay: `${i * 0.3}s` }}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#131830] border border-[#D4FE01]/20 hover:border-[#D4FE01]/60 flex items-center justify-center transition-all duration-300 group-hover:bg-[#D4FE01]/10 group-hover:shadow-lg group-hover:shadow-[#D4FE01]/20">
                    <span className="text-[#D4FE01] text-lg font-bold">{step.icon}</span>
                  </div>
                  <span className="text-white/50 text-[10px] font-medium uppercase tracking-wider">
                    {step.label}
                  </span>
                </div>

                {/* Connector line */}
                {i < pipelineSteps.length - 1 && (
                  <div className="w-8 sm:w-12 h-px mx-1 relative overflow-hidden hidden sm:block">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#D4FE01]/40 to-[#D4FE01]/40" />
                    <div
                      className="absolute top-0 h-full w-4 bg-gradient-to-r from-transparent via-[#D4FE01] to-transparent animate-dash"
                      style={{ animationDuration: `${1.5 + i * 0.2}s` }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Label below */}
          <p className="mt-6 text-white/30 text-xs font-medium uppercase tracking-widest text-center">
            Your complete outbound operating system
          </p>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}

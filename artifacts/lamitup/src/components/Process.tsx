import { motion } from 'framer-motion'

const CTA_URL = 'https://calendly.com/lamitup'

const steps = [
  {
    num: '01',
    title: 'Understand Your Business',
    desc: 'We start by mapping your revenue model, competitive positioning, and current outreach gaps.',
  },
  {
    num: '02',
    title: 'Define Your ICP',
    desc: 'We identify exactly who to target — by company size, industry, tech stack, and buying signals.',
  },
  {
    num: '03',
    title: 'Build Outreach Infrastructure',
    desc: 'We set up domains, email warmup, sequences, CRM workflows, and data pipelines from scratch.',
  },
  {
    num: '04',
    title: 'Launch Campaigns',
    desc: 'Coordinated email, LinkedIn, and calling campaigns go live with AI-personalized messaging.',
  },
  {
    num: '05',
    title: 'Book Meetings',
    desc: 'Our SDRs handle follow-ups, objections, and scheduling so qualified meetings land on your calendar.',
  },
  {
    num: '06',
    title: 'Optimize Weekly',
    desc: 'We review every metric weekly — open rates, reply rates, conversions — and improve continuously.',
  },
]

export default function Process() {
  return (
    <section id="process" className="bg-white py-28 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="mb-16"
        >
          <p className="text-[#D4FE01] bg-[#0B1026] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-4">
            The Process
          </p>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-black leading-tight">
            How We Build Your Growth Engine
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[#E3E5E8] hidden sm:block" />

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const }}
                className="relative flex gap-6 sm:gap-10 pb-10 last:pb-0"
              >
                {/* Number bubble */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-[#0B1026] border-2 border-[#D4FE01] flex items-center justify-center">
                    <span className="font-display font-extrabold text-[#D4FE01] text-sm leading-none">
                      {step.num}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-2 pb-2">
                  <h3 className="font-display font-bold text-[#0B1026] text-xl mb-2">
                    {step.title}
                  </h3>
                  <p className="text-black/50 text-base leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mid CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="mt-16 text-center"
        >
          <a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0B1026] hover:bg-[#131830] text-[#D4FE01] font-bold text-base px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-[#0B1026]/30"
          >
            Let's Scale My Pipeline
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

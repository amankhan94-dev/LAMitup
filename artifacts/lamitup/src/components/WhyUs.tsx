import { motion } from 'framer-motion'
import { Target, Brain, GitBranch, Globe2, Settings2, TrendingUp, Repeat } from 'lucide-react'

const features = [
  {
    icon: Target,
    title: 'Built for B2B Technology',
    desc: 'We only work with tech companies — SaaS, MSPs, Cloud, AI, Cybersecurity. We know the buyer, the language, and the sales cycle.',
  },
  {
    icon: Brain,
    title: 'AI + Human Outreach',
    desc: 'We combine AI-powered personalization at scale with real SDRs who handle conversations, objections, and booking.',
  },
  {
    icon: GitBranch,
    title: 'End-to-End Execution',
    desc: 'We own every layer — data, messaging, outreach, follow-up, and conversion. Nothing falls through the cracks.',
  },
  {
    icon: Globe2,
    title: 'Global Outreach',
    desc: 'We operate in KSA, India, Africa, and worldwide. Cross-border campaigns, multiple time zones, multiple languages.',
  },
  {
    icon: Settings2,
    title: 'Predictable Systems',
    desc: 'No guessing. No hoping. Every campaign is built on a repeatable process that gets better with every iteration.',
  },
  {
    icon: TrendingUp,
    title: 'Revenue Focused',
    desc: 'We don\'t celebrate opens or clicks. We celebrate qualified meetings on your calendar and pipeline in your CRM.',
  },
  {
    icon: Repeat,
    title: 'Scalable Processes',
    desc: 'Built to scale with you. As your targets grow, the system grows — without rebuilding from scratch.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-[#E3E5E8] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="mb-16"
        >
          <p className="text-[#0B1026] text-xs font-bold uppercase tracking-widest mb-4">
            Why LAMitup
          </p>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-black leading-tight max-w-2xl">
            Built Different. By Design.
          </h2>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((f) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                variants={itemVariants}
                className="group bg-white rounded-2xl p-7 hover:shadow-xl hover:shadow-black/8 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-11 h-11 rounded-xl bg-[#0B1026] flex items-center justify-center mb-5 group-hover:bg-[#D4FE01] transition-colors duration-300">
                  <Icon size={20} className="text-[#D4FE01] group-hover:text-[#0B1026] transition-colors duration-300" />
                </div>
                <h3 className="font-display font-bold text-[#0B1026] text-lg mb-2.5">{f.title}</h3>
                <p className="text-black/50 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

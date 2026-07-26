import { motion } from 'framer-motion'
import { Database, MessageSquare, Zap, RefreshCw, TrendingDown, Layers, BarChart2 } from 'lucide-react'

const problems = [
  {
    icon: Database,
    title: 'Poor Data Quality',
    desc: 'Wrong contacts, outdated info, and unverified lists that waste your team\'s time.',
  },
  {
    icon: MessageSquare,
    title: 'Generic Messaging',
    desc: 'Copy-paste outreach that looks exactly like every other cold email in the inbox.',
  },
  {
    icon: Layers,
    title: 'Disconnected Tools',
    desc: 'Five platforms that don\'t talk to each other. Leads fall through every crack.',
  },
  {
    icon: RefreshCw,
    title: 'No Follow-up Process',
    desc: 'One email sent, then silence. Most deals close on the 5th to 12th touchpoint.',
  },
  {
    icon: TrendingDown,
    title: 'Weak Sales Execution',
    desc: 'Calls without scripts. Meetings without agendas. Prospects without context.',
  },
  {
    icon: Zap,
    title: 'No Lead Nurturing',
    desc: 'Prospects who aren\'t ready to buy today get abandoned instead of nurtured.',
  },
  {
    icon: BarChart2,
    title: 'Zero Measurement',
    desc: 'No tracking, no attribution, no visibility. You can\'t improve what you don\'t measure.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function Problem() {
  return (
    <section id="problem" className="bg-white py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="mb-16"
        >
          <p className="text-[#D4FE01] bg-[#0B1026] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-4">
            The Problem
          </p>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-black leading-tight max-w-2xl">
            Why Most Outbound Campaigns Fail
          </h2>
        </motion.div>

        {/* Problem Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-20"
        >
          {problems.map((p) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                variants={cardVariants}
                className="group p-6 rounded-2xl border border-[#E3E5E8] hover:border-[#0B1026]/20 hover:shadow-xl hover:shadow-black/5 transition-all duration-300 bg-white hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E3E5E8] group-hover:bg-[#0B1026] flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon size={18} className="text-[#0B1026] group-hover:text-[#D4FE01] transition-colors duration-300" />
                </div>
                <h3 className="font-display font-bold text-[#0B1026] text-base mb-2">{p.title}</h3>
                <p className="text-black/50 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' as const }}
          className="text-center"
        >
          <div className="inline-block">
            <p className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-black leading-tight">
              Outbound isn't broken.
            </p>
            <p className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
              <span className="text-[#0B1026]">The </span>
              <span className="relative inline-block">
                <span className="relative z-10 text-white bg-[#0B1026] px-3 py-0.5 rounded-lg">system</span>
              </span>
              <span className="text-[#0B1026]"> is.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

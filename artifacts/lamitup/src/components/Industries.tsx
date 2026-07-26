import { motion } from 'framer-motion'
import { Shield, Cloud, Brain, Server, Network, Package, Building2, Cpu } from 'lucide-react'

const industries = [
  { icon: Package, label: 'SaaS', desc: 'Software as a Service' },
  { icon: Shield, label: 'Cybersecurity', desc: 'Security & Compliance' },
  { icon: Cloud, label: 'Cloud', desc: 'Cloud Providers & MSPs' },
  { icon: Brain, label: 'AI & ML', desc: 'AI Startups & Platforms' },
  { icon: Server, label: 'MSP', desc: 'Managed Service Providers' },
  { icon: Network, label: 'IT Distribution', desc: 'Technology Distributors' },
  { icon: Cpu, label: 'Software', desc: 'Software Vendors & ISVs' },
  { icon: Building2, label: 'Enterprise Tech', desc: 'Enterprise Solutions' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: 'easeOut' as const } },
}

export default function Industries() {
  return (
    <section id="industries" className="bg-white py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="mb-16 text-center"
        >
          <p className="text-[#D4FE01] bg-[#0B1026] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-4">
            Industries
          </p>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-black leading-tight">
            Who We Work With
          </h2>
          <p className="mt-4 text-black/50 text-lg max-w-xl mx-auto">
            We work exclusively with B2B technology companies — because that's where our expertise runs deepest.
          </p>
        </motion.div>

        {/* Industry Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <motion.div
                key={industry.label}
                variants={cardVariants}
                className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-[#E3E5E8] hover:border-[#0B1026] hover:bg-[#0B1026] transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0B1026]/20"
              >
                <div className="w-12 h-12 rounded-xl bg-[#E3E5E8] group-hover:bg-[#D4FE01] flex items-center justify-center transition-colors duration-300">
                  <Icon size={22} className="text-[#0B1026] transition-colors duration-300" />
                </div>
                <div className="text-center">
                  <div className="font-display font-bold text-[#0B1026] group-hover:text-white text-base transition-colors">
                    {industry.label}
                  </div>
                  <div className="text-black/40 group-hover:text-white/50 text-xs mt-0.5 transition-colors">
                    {industry.desc}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

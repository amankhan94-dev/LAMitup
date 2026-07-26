import { motion } from 'framer-motion'

const modules = [
  {
    num: '01',
    title: 'Strategy',
    tags: ['ICP', 'Buyer Personas', 'Offer Positioning', 'Campaign Planning', 'Messaging', 'Microsite Strategy'],
  },
  {
    num: '02',
    title: 'Data Intelligence',
    tags: ['ZoomInfo', 'Apollo', 'Clay', 'LinkedIn', 'Intent Data', 'AI Enrichment', 'Verified Contacts'],
  },
  {
    num: '03',
    title: 'Campaign Assets',
    tags: ['Cold Emails', 'LinkedIn Messaging', 'Calling Scripts', 'Landing Pages', 'Microsites', 'Video Outreach'],
  },
  {
    num: '04',
    title: 'Automation',
    tags: ['Email Infrastructure', 'Sequences', 'Domains', 'Deliverability', 'AI Personalization', 'CRM Integration'],
  },
  {
    num: '05',
    title: 'Human Outreach',
    tags: ['Professional SDRs', 'Cold Calling', 'Follow Ups', 'Objection Handling', 'Meeting Booking'],
  },
  {
    num: '06',
    title: 'Nurturing',
    tags: ['Multi-touch Campaigns', 'Remarketing', 'Retargeting', 'Email Follow-ups', 'Content Distribution'],
  },
  {
    num: '07',
    title: 'Conversion',
    tags: ['Sales Enablement', 'Meeting Preparation', 'Pipeline Reviews', 'Follow-up Frameworks', 'Proposal Support'],
  },
  {
    num: '08',
    title: 'Growth Loop',
    tags: ['Feedback', 'Testimonials', 'Referrals', 'Optimization', 'Continuous Improvement'],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function Solution() {
  return (
    <section id="solution" className="bg-[#0B1026] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="mb-16 max-w-3xl"
        >
          <p className="text-[#D4FE01] text-xs font-bold uppercase tracking-widest mb-4">
            The Solution
          </p>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-4">
            Meet Your Outbound Growth Engine
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            A complete end-to-end operating system — not a service, not a tool.
            Infrastructure that creates revenue.
          </p>
        </motion.div>

        {/* Module Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {modules.map((mod) => (
            <motion.div
              key={mod.num}
              variants={cardVariants}
              className="group p-6 rounded-2xl bg-[#131830] border border-white/5 hover:border-[#D4FE01]/20 hover:bg-[#1a2140] transition-all duration-300 hover:-translate-y-1"
            >
              {/* Number */}
              <div className="font-display font-extrabold text-4xl text-[#D4FE01]/30 group-hover:text-[#D4FE01]/60 transition-colors mb-3 leading-none">
                {mod.num}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-white text-lg mb-4">
                {mod.title}
              </h3>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {mod.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium text-white/40 bg-white/5 group-hover:bg-white/8 px-2 py-0.5 rounded-full transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

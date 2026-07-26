import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'What exactly is an Outreach Engine?',
    a: "An Outreach Engine is a complete, end-to-end system that handles every step of outbound sales — from identifying the right prospects and building verified contact lists, to crafting personalized messages, running multi-channel campaigns, making calls, following up, and booking qualified meetings on your calendar. It's not a single tool or tactic. It's a full operating system for predictable revenue generation.",
  },
  {
    q: 'Who is this for?',
    a: "LAMitup is built exclusively for B2B technology companies — SaaS businesses, cybersecurity firms, cloud providers, AI startups, MSPs, IT distributors, and enterprise software vendors. If you sell technology to other businesses and need a consistent flow of qualified sales conversations, this is for you.",
  },
  {
    q: 'Do you build the outreach team?',
    a: 'Yes. We can build and operate the entire outreach function — including professional SDRs, callers, and campaign managers. You don\'t need to hire, train, or manage anyone. We handle the full human layer alongside the tech and automation layers.',
  },
  {
    q: 'Can you work with our existing SDRs?',
    a: 'Absolutely. If you already have a sales team, we can integrate with them — providing the infrastructure, data, messaging, and playbooks they need to perform at a higher level. We function as the engine that makes your team more effective, not as a replacement.',
  },
  {
    q: 'Which tools do you use?',
    a: 'We use best-in-class tools across every layer: ZoomInfo, Apollo, and Clay for data; Instantly, Smartlead, and Lemlist for email; LinkedIn Sales Navigator for social outreach; HubSpot or Salesforce for CRM; and custom AI workflows for personalization and enrichment. We select and configure the right stack for your specific situation.',
  },
  {
    q: 'How quickly can we launch?',
    a: "Most clients have their first campaigns live within 3 to 4 weeks of kickoff. We move fast because we've built this system dozens of times. The first two weeks focus on strategy and infrastructure. By week three, campaigns are running. By week five, meetings are being booked.",
  },
]

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: 'easeOut' as const }}
      className="border-b border-[#E3E5E8] last:border-b-0"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-6 text-left group"
      >
        <span className="font-display font-bold text-[#0B1026] text-base sm:text-lg group-hover:text-black transition-colors leading-snug">
          {q}
        </span>
        <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#E3E5E8] group-hover:border-[#0B1026] group-hover:bg-[#0B1026] flex items-center justify-center transition-all duration-200">
          {open
            ? <Minus size={14} className="text-[#0B1026] group-hover:text-[#D4FE01] transition-colors" />
            : <Plus size={14} className="text-[#0B1026] group-hover:text-[#D4FE01] transition-colors" />
          }
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' as const }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-black/55 text-base leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-28 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="mb-14 text-center"
        >
          <p className="text-[#D4FE01] bg-[#0B1026] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-4">
            FAQ
          </p>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-black leading-tight">
            Common Questions
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

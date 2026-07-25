import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'What exactly is an Outbound Operating System?',
    a: "It's not a tool or a single service. It's a complete, running machine — strategy, data, messaging, automation, human outreach, follow-up, and optimization — all designed, built, and operated as one integrated system. The goal is predictable qualified meetings, month after month.",
  },
  {
    q: 'Who is this built for?',
    a: 'B2B technology companies — SaaS, Cybersecurity, Cloud, AI, MSPs, IT distribution, enterprise software. Specifically for CEOs, Founders, VP Sales, Revenue Leaders, and Heads of Growth who need pipeline but don\'t want to hire and manage an entire sales development team from scratch.',
  },
  {
    q: 'Do you build the outbound team from scratch?',
    a: "Yes. We recruit, onboard, train, and manage professional SDRs, provide the tooling, write the playbooks, and run the entire operation. You get results — meetings on your calendar — without building the team yourself.",
  },
  {
    q: 'Can you work with our existing SDRs or sales team?',
    a: "Absolutely. We can plug into your existing team and bring the infrastructure, data, messaging, and optimization layer they're missing. Many clients use us to augment internal capacity with a structured, accountable process.",
  },
  {
    q: 'Which tools and platforms do you use?',
    a: "We work with industry-leading platforms: ZoomInfo, Apollo, Clay, LinkedIn Sales Navigator, Instantly, Smartlead, HubSpot, Salesforce, and custom AI enrichment workflows. We select the stack that fits your ICP and budget — no vendor lock-in.",
  },
  {
    q: 'How quickly can we launch?',
    a: "Most clients are fully launched within 3-4 weeks of engagement start. Week 1 is strategy and ICP. Week 2 is infrastructure build. Week 3 is asset creation and sequence setup. Week 4 is launch. Results typically begin accumulating by week 5-6.",
  },
];

function FAQItem({ faq, index, isInView }: { faq: typeof faqs[0]; index: number; isInView: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="border-b"
      style={{ borderColor: '#E3E5E8' }}
      data-testid={`faq-item-${index}`}
    >
      <button
        className="w-full flex items-center justify-between py-6 text-left group"
        onClick={() => setOpen(!open)}
        data-testid={`faq-toggle-${index}`}
      >
        <span
          className="font-semibold text-black group-hover:text-gray-700 transition-colors pr-8"
          style={{ fontFamily: 'Bricolage Grotesque, sans-serif', fontSize: 17 }}
        >
          {faq.q}
        </span>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
          style={{
            backgroundColor: open ? '#D4FE01' : '#0B1026',
            color: open ? '#0B1026' : '#D4FE01',
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            className="w-4 h-4 transition-transform duration-300"
            style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p
              className="pb-6 text-base leading-relaxed"
              style={{ color: '#555', fontFamily: 'Inter, sans-serif' }}
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
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
            FAQs
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight"
            style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
          >
            Common Questions
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="border-t" style={{ borderColor: '#E3E5E8' }}>
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

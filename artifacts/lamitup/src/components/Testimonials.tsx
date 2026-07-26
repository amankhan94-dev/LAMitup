import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "LAMitup didn't just run campaigns for us — they built our entire outbound system from scratch. Within 60 days, we had a repeatable process and a pipeline we could actually forecast from.",
    name: 'Sarah Mitchell',
    title: 'VP of Sales',
    company: 'CloudAxis',
    sector: 'Cloud Infrastructure',
    initials: 'SM',
  },
  {
    quote: "We'd tried three different agencies before. None of them understood B2B tech buying cycles. LAMitup understood our ICP better than we did on day one. The results were almost immediate.",
    name: 'James Okonkwo',
    title: 'CEO & Co-Founder',
    company: 'SecureLayer',
    sector: 'Cybersecurity',
    initials: 'JO',
  },
  {
    quote: "What sets them apart is that they think like operators, not vendors. They identified the bottlenecks in our sales process, fixed the messaging, and built the infrastructure. Our close rate went up 40%.",
    name: 'Priya Sharma',
    title: 'Head of Growth',
    company: 'NovaSaaS',
    sector: 'SaaS Platform',
    initials: 'PS',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#E3E5E8] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="mb-16 text-center"
        >
          <p className="text-[#0B1026] text-xs font-bold uppercase tracking-widest mb-4">
            Client Results
          </p>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-black leading-tight">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' as const }}
              className="bg-white rounded-2xl p-8 flex flex-col gap-6 hover:shadow-xl hover:shadow-black/8 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Quote icon */}
              <Quote size={28} className="text-[#D4FE01] fill-[#D4FE01] flex-shrink-0" />

              {/* Quote text */}
              <p className="text-[#0B1026] text-base leading-relaxed flex-grow">
                "{t.quote}"
              </p>

              {/* Person */}
              <div className="flex items-center gap-4 pt-2 border-t border-[#E3E5E8]">
                {/* Avatar */}
                <div className="w-11 h-11 rounded-full bg-[#0B1026] flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-bold text-[#D4FE01] text-sm">{t.initials}</span>
                </div>
                <div>
                  <div className="font-display font-bold text-[#0B1026] text-sm">{t.name}</div>
                  <div className="text-black/50 text-xs">{t.title} · {t.company}</div>
                </div>
                {/* Sector badge */}
                <div className="ml-auto">
                  <span className="text-[10px] font-medium text-[#0B1026]/50 bg-[#E3E5E8] px-2 py-0.5 rounded-full whitespace-nowrap">
                    {t.sector}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const testimonials = [
  {
    quote:
      "Before LAMitup, we were burning money on generic ads and hoping for referrals. Within 90 days they built us a machine that consistently delivers 18-22 qualified discovery calls per month. Our sales team is closing, not hunting.",
    name: 'Rajesh Nair',
    title: 'VP of Sales',
    company: 'CloudSphere Technologies',
    initials: 'RN',
    color: '#D4FE01',
  },
  {
    quote:
      "The precision is what stands out. They didn't just send emails — they built infrastructure. ICP, messaging, sequences, SDR playbooks, the whole thing. We went from zero structured outbound to a pipeline we can actually forecast.",
    name: 'Sarah Chen',
    title: 'Co-Founder & CEO',
    company: 'Vaultry Security',
    initials: 'SC',
    color: '#D4FE01',
  },
  {
    quote:
      "I've worked with three outbound agencies. LAMitup is the only one that operates like a proper revenue team, not a vendor. They think about our pipeline like it's their pipeline. The meetings are real — right ICPs, right conversations.",
    name: 'Omar Al-Rashid',
    title: 'Chief Revenue Officer',
    company: 'NexaCloud MSP',
    initials: 'OA',
    color: '#D4FE01',
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      className="py-24 lg:py-32"
      style={{ backgroundColor: '#F5F5F7' }}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
            Social Proof
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight"
            style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
          >
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.13 }}
              className="relative flex flex-col p-8 rounded-2xl bg-white hover-lift"
              style={{
                border: '1px solid rgba(0,0,0,0.06)',
                boxShadow: '0 4px 24px rgba(11,16,38,0.06)',
              }}
              data-testid={`testimonial-card-${i}`}
            >
              {/* Quote mark */}
              <div
                className="text-6xl font-black leading-none mb-4 -mt-2"
                style={{ color: '#D4FE01', fontFamily: 'Bricolage Grotesque, sans-serif' }}
              >
                "
              </div>

              {/* Quote */}
              <p
                className="text-base leading-relaxed text-gray-700 mb-8 flex-1"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                {/* Avatar */}
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-black flex-shrink-0"
                  style={{
                    backgroundColor: '#0B1026',
                    color: '#D4FE01',
                    fontFamily: 'Bricolage Grotesque, sans-serif',
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    className="font-bold text-black text-sm"
                    style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: '#6B7280', fontFamily: 'Inter, sans-serif' }}
                  >
                    {t.title}
                  </div>
                  <div
                    className="text-xs font-semibold mt-0.5"
                    style={{ color: '#0B1026', fontFamily: 'Inter, sans-serif' }}
                  >
                    {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

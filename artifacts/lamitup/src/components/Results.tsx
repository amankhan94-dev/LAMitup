import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 10, suffix: 'M+', label: 'Prospects Reached', sub: 'Across every major B2B channel' },
  { value: 100, suffix: 'K+', label: 'Conversations Started', sub: 'Qualified replies, not spam' },
  { value: 5000, suffix: '+', label: 'Qualified Meetings', sub: 'Directly onto client calendars' },
  { value: 10, suffix: '+', label: 'Countries Served', sub: 'Global reach, local precision' },
];

function useCounter(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);

  return count;
}

function StatCard({ stat, index, active }: { stat: typeof stats[0]; index: number; active: boolean }) {
  const count = useCounter(stat.value, 1800 + index * 200, active);
  const displayValue = stat.value >= 1000 
    ? `${(count / 1000).toFixed(count === stat.value ? 0 : 1)}K` 
    : count;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="text-center px-8 py-10"
      data-testid={`stat-card-${index}`}
    >
      <div
        className="text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-3 tabular-nums"
        style={{
          color: '#D4FE01',
          fontFamily: 'Bricolage Grotesque, sans-serif',
        }}
      >
        {stat.value >= 1000 ? displayValue : count}
        {stat.suffix}
      </div>
      <div
        className="text-lg font-semibold text-white mb-1"
        style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
      >
        {stat.label}
      </div>
      <div
        className="text-sm"
        style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}
      >
        {stat.sub}
      </div>
    </motion.div>
  );
}

export default function Results() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="results"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ backgroundColor: '#0B1026' }}
      ref={ref}
    >
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(212,254,1,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: '#D4FE01', fontFamily: 'Inter, sans-serif' }}
          >
            Track Record
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight"
            style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
          >
            The Numbers That Matter
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x"
          style={{ borderColor: 'rgba(255,255,255,0.08)' }}
        >
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} active={isInView} />
          ))}
        </div>

        {/* Divider line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 h-px"
          style={{ backgroundColor: 'rgba(212,254,1,0.2)' }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-8 text-sm"
          style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter, sans-serif' }}
        >
          Numbers represent aggregate results across all LAMitup client engagements.
        </motion.p>
      </div>
    </section>
  );
}

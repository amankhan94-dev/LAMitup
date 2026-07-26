import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const stats = [
  { value: 10, suffix: 'M+', label: 'Prospects reached', desc: 'Verified contacts across global tech markets' },
  { value: 100, suffix: 'K+', label: 'Conversations started', desc: 'Qualified replies from decision makers' },
  { value: 5, suffix: 'K+', label: 'Qualified meetings booked', desc: 'Sales conversations that actually happened' },
  { value: 10, suffix: '+', label: 'Countries served', desc: 'Active campaigns across KSA, India, Africa and beyond' },
]

function useCounter(end: number, duration = 1800, started: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    let startTime: number | null = null
    let frame: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * end))
      if (progress < 1) frame = requestAnimationFrame(step)
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [started, end, duration])

  return count
}

function StatCard({ value, suffix, label, desc, index }: {
  value: number; suffix: string; label: string; desc: string; index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [started, setStarted] = useState(false)
  const count = useCounter(value, 1800, started)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' as const }}
      className="text-center px-4 py-8 border-b border-white/10 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
    >
      <div className="counter-value font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-[#D4FE01] mb-2 leading-none tabular-nums">
        {count}{suffix}
      </div>
      <div className="font-display font-bold text-white text-lg mb-1">{label}</div>
      <div className="text-white/40 text-sm leading-relaxed max-w-[200px] mx-auto">{desc}</div>
    </motion.div>
  )
}

export default function Results() {
  return (
    <section id="results" className="bg-[#0B1026] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="mb-16 text-center"
        >
          <p className="text-[#D4FE01] text-xs font-bold uppercase tracking-widest mb-4">
            Results
          </p>
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
            The Numbers That Matter
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-white/10 rounded-2xl border border-white/10 overflow-hidden divide-y sm:divide-x sm:divide-y-0">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

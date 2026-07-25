import { motion } from 'framer-motion';

const pipelineNodes = [
  { label: 'Data', x: 40, y: 80, delay: 0 },
  { label: 'AI', x: 160, y: 40, delay: 0.1 },
  { label: 'Email', x: 280, y: 80, delay: 0.2 },
  { label: 'Calls', x: 400, y: 40, delay: 0.3 },
  { label: 'Meetings', x: 520, y: 80, delay: 0.4 },
  { label: 'Pipeline', x: 640, y: 40, delay: 0.5 },
  { label: 'Revenue', x: 760, y: 80, delay: 0.6 },
];

const paths = [
  'M 80 80 C 120 80, 120 40, 160 40',
  'M 200 40 C 240 40, 240 80, 280 80',
  'M 320 80 C 360 80, 360 40, 400 40',
  'M 440 40 C 480 40, 480 80, 520 80',
  'M 560 80 C 600 80, 600 40, 640 40',
  'M 680 40 C 720 40, 720 80, 760 80',
];

export default function Hero() {
  return (
    <section
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden pt-20"
      style={{ backgroundColor: '#0B1026' }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,254,1,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span
            className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{
              backgroundColor: 'rgba(212,254,1,0.1)',
              color: '#D4FE01',
              border: '1px solid rgba(212,254,1,0.25)',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '0.08em',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full mr-2 animate-pulse"
              style={{ backgroundColor: '#D4FE01' }}
            />
            The Outbound Operating System for B2B Tech
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-[82px] font-black text-white leading-[1.05] tracking-tight mb-6 max-w-5xl mx-auto"
          style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
        >
          Build an Outreach Engine That{' '}
          <span style={{ color: '#D4FE01' }} className="lime-text-glow">
            Books Meetings
          </span>{' '}
          While You Focus on Closing Deals.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
          style={{
            color: 'rgba(255,255,255,0.6)',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          We design, build and operate complete B2B outbound systems — from data and AI workflows
          to outreach, telecalling, follow-ups and conversion — so technology companies consistently
          generate qualified sales conversations.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <a
            href="https://calendly.com/lamitup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 rounded-xl text-base font-bold transition-all duration-200 hover:scale-105 active:scale-95 lime-glow"
            style={{
              backgroundColor: '#D4FE01',
              color: '#0B1026',
              fontFamily: 'Inter, sans-serif',
            }}
            data-testid="hero-cta-primary"
          >
            Book a Free Strategy Call
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <button
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-4 rounded-xl text-base font-semibold transition-all duration-200 hover:bg-white/10"
            style={{
              border: '1.5px solid rgba(255,255,255,0.25)',
              color: 'rgba(255,255,255,0.85)',
              fontFamily: 'Inter, sans-serif',
            }}
            data-testid="hero-cta-secondary"
          >
            See How It Works
          </button>
        </motion.div>

        {/* Pipeline SVG Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="relative mx-auto"
          style={{ maxWidth: 860 }}
        >
          <div
            className="relative rounded-2xl overflow-hidden p-6 md:p-10"
            style={{
              backgroundColor: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <svg
              viewBox="0 0 840 140"
              className="w-full"
              style={{ minHeight: 100 }}
            >
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Animated connecting paths */}
              {paths.map((d, i) => (
                <g key={i}>
                  {/* Base path */}
                  <path
                    d={d}
                    fill="none"
                    stroke="rgba(212,254,1,0.12)"
                    strokeWidth="2"
                  />
                  {/* Animated dash */}
                  <path
                    d={d}
                    fill="none"
                    stroke="#D4FE01"
                    strokeWidth="2"
                    strokeDasharray="8 16"
                    strokeDashoffset="0"
                    filter="url(#glow)"
                    style={{
                      animation: `flow-dash 1.8s linear infinite`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                </g>
              ))}

              {/* Nodes */}
              {pipelineNodes.map((node, i) => (
                <motion.g
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                >
                  {/* Outer ring glow */}
                  <circle
                    cx={node.x + 40}
                    cy={node.y}
                    r="28"
                    fill="rgba(212,254,1,0.06)"
                    style={{
                      animation: `pulse-node 2.5s ease-in-out infinite`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                  {/* Node circle */}
                  <circle
                    cx={node.x + 40}
                    cy={node.y}
                    r="20"
                    fill="rgba(212,254,1,0.12)"
                    stroke="#D4FE01"
                    strokeWidth="1.5"
                    filter="url(#glow)"
                  />
                  {/* Node label */}
                  <text
                    x={node.x + 40}
                    y={node.y + 4}
                    textAnchor="middle"
                    fill="#D4FE01"
                    fontSize="8"
                    fontWeight="700"
                    fontFamily="Inter, sans-serif"
                    letterSpacing="0.5"
                  >
                    {node.label.toUpperCase()}
                  </text>
                </motion.g>
              ))}
            </svg>

            {/* Label row */}
            <div className="flex justify-between mt-2 px-2">
              {pipelineNodes.map((node) => (
                <div key={node.label} className="flex flex-col items-center">
                  <span
                    className="hidden md:block text-xs font-medium"
                    style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter, sans-serif' }}
                  >
                    {node.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #0B1026)',
        }}
      />
    </section>
  );
}

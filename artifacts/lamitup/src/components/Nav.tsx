import { useState, useEffect } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-[#0B1026]/90 shadow-lg shadow-black/20 border-b border-white/5'
          : 'bg-transparent'
      }`}
      data-testid="nav"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center" data-testid="nav-logo">
            <span
              className="text-xl font-black text-white tracking-tight"
              style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
            >
              LAM<span style={{ color: '#D4FE01' }}>itup</span>
            </span>
          </a>

          {/* Nav Links — Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: 'How It Works', id: 'how-it-works' },
              { label: 'Why Us', id: 'why-us' },
              { label: 'Results', id: 'results' },
              { label: 'FAQ', id: 'faq' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 tracking-wide"
                data-testid={`nav-link-${link.id}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://calendly.com/lamitup"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              backgroundColor: '#D4FE01',
              color: '#0B1026',
              fontFamily: 'Inter, sans-serif',
            }}
            data-testid="nav-cta"
          >
            Book a Free Strategy Call
          </a>

          {/* Mobile CTA */}
          <a
            href="https://calendly.com/lamitup"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden inline-flex items-center px-4 py-2 text-xs font-semibold rounded-lg"
            style={{ backgroundColor: '#D4FE01', color: '#0B1026' }}
            data-testid="nav-cta-mobile"
          >
            Book Call
          </a>
        </div>
      </div>
    </nav>
  );
}

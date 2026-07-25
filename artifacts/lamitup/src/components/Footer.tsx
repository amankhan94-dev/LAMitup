import { FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer
      className="py-8 border-t"
      style={{ backgroundColor: '#000000', borderColor: 'rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center">
            <span
              className="text-lg font-black text-white"
              style={{ fontFamily: 'Bricolage Grotesque, sans-serif' }}
            >
              LAM<span style={{ color: '#D4FE01' }}>itup</span>
            </span>
          </div>

          {/* Center */}
          <p
            className="text-xs text-center"
            style={{ color: 'rgba(255,255,255,0.35)', fontFamily: 'Inter, sans-serif' }}
          >
            © 2025 LAMitup. All rights reserved.
            {' · '}
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.35)' }}
            >
              Privacy Policy
            </a>
          </p>

          {/* Right */}
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/company/lamitup"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all duration-200"
              aria-label="LinkedIn"
              data-testid="footer-linkedin"
            >
              <FaLinkedinIn className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:fuzail.khan@lamitup.com"
              className="text-xs hover:text-white transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}
              data-testid="footer-email"
            >
              fuzail.khan@lamitup.com
            </a>
            <a
              href="https://www.lamitup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs hover:text-white transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'Inter, sans-serif' }}
              data-testid="footer-website"
            >
              www.lamitup.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

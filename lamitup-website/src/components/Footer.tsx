import { Linkedin, Mail, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          className="font-display font-extrabold text-lg tracking-tight text-white"
        >
          LAM<span className="text-[#D4FE01]">itup</span>
        </a>

        {/* Copyright */}
        <p className="text-white/30 text-sm text-center order-last sm:order-none">
          © {new Date().getFullYear()} LAMitup. All rights reserved.
        </p>

        {/* Links */}
        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/company/lamitup"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white/40 hover:text-[#D4FE01] transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:fuzail.khan@lamitup.com"
            aria-label="Email"
            className="text-white/40 hover:text-[#D4FE01] transition-colors"
          >
            <Mail size={18} />
          </a>
          <a
            href="https://www.lamitup.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Website"
            className="text-white/40 hover:text-[#D4FE01] transition-colors"
          >
            <Globe size={18} />
          </a>
          <span className="w-px h-4 bg-white/10" />
          <a
            href="#"
            className="text-white/30 hover:text-white/60 text-xs transition-colors"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}

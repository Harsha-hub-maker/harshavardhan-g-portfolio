import { personalInfo, socialLinks, footerContent, academy } from '../data/portfolioData'

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-[#0a0a0a] via-[#111111] to-black text-[#d4d4d4] pt-28 pb-16 px-6 md:px-12 font-sans border-t border-white/10 flex flex-col justify-between min-h-[60vh] overflow-hidden select-none">
      {/* Decorative background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#ff2a2a]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Row: Taglines, Credential, Availability */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 uppercase text-xs tracking-wider">
        {/* Column 1: Professional Taglines */}
        <div className="flex flex-col space-y-2 border-l-2 border-[#ff2a2a] pl-4">
          {footerContent.taglines.map((tagline, idx) => (
            <p key={idx} className="leading-relaxed text-white/80 font-medium">
              {tagline}
            </p>
          ))}
        </div>

        {/* Column 2: Credential & View Work */}
        <div className="flex flex-col sm:items-center justify-start space-y-3">
          <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[11px] font-mono">
            {footerContent.credential}
          </span>
          <a
            href="#projects"
            className="inline-flex items-center space-x-1 text-white hover:text-[#ff2a2a] transition-colors font-semibold group underline underline-offset-4"
          >
            <span>View Work</span>
            <svg
              className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Column 3: Availability & Year */}
        <div className="flex flex-col sm:items-end justify-start space-y-2 text-white/80">
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-white">Available for opportunities</span>
          </div>
          <span className="font-mono text-white/50 text-sm tracking-widest">{currentYear}</span>
        </div>
      </div>

      {/* Middle: Oversized Brand Name */}
      <div className="relative z-10 py-16 sm:py-20 md:py-24 text-center overflow-hidden">
        <h2 className="text-[14vw] sm:text-[15vw] md:text-[15vw] leading-none font-extrabold tracking-tighter lowercase text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/30 whitespace-nowrap drop-shadow-2xl">
          {personalInfo.brandName.toLowerCase()}
          <span className="text-[#ff2a2a]">.</span>
        </h2>
      </div>

      {/* Bottom Row: Links, Attribution, Socials & Contact */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-8 items-end pt-8 border-t border-white/10 text-xs">
        {/* Column 1: Contact link, Copyright & TAP Academy Credit */}
        <div className="flex flex-col space-y-2">
          <a
            href="#contact"
            className="font-bold text-white hover:text-[#ff2a2a] transition-colors underline underline-offset-4 uppercase tracking-widest text-[11px]"
          >
            Contact
          </a>
          <p className="text-white/60 text-[11px]">
            {footerContent.copyright}
          </p>
          <p className="text-white/60 text-[11px]">
            Trained at{' '}
            <a
              href={academy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#ff2a2a] underline underline-offset-2 transition-colors font-semibold"
            >
              {academy.name}
            </a>
          </p>
        </div>

        {/* Column 2: Email & Social Icons */}
        <div className="flex flex-col sm:items-center space-y-4">
          <a
            href={`mailto:${personalInfo.emails.primary}`}
            className="text-white/90 hover:text-white transition-colors lowercase font-mono text-xs underline underline-offset-4"
          >
            {personalInfo.emails.primary}
          </a>
          <div className="flex items-center space-x-5 text-white/70">
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-[#ff2a2a] hover:text-white hover:border-[#ff2a2a] transition-all duration-300 hover:scale-110"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-[#ff2a2a] hover:text-white hover:border-[#ff2a2a] transition-all duration-300 hover:scale-110"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            )}
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-[#ff2a2a] hover:text-white hover:border-[#ff2a2a] transition-all duration-300 hover:scale-110"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Column 3: Explore GitHub Link */}
        <div className="flex flex-col sm:items-end justify-end">
          <a
            href={socialLinks.github || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#ff2a2a] hover:border-[#ff2a2a] transition-all duration-300 font-medium group"
          >
            <span>Explore My GitHub</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

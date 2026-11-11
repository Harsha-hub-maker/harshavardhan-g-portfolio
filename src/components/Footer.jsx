import { personalInfo, socialLinks, footerContent, academy } from '../data/portfolioData'

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="relative bg-[#ff2a2a] text-white pt-28 pb-16 px-6 md:px-12 font-sans flex flex-col justify-between min-h-[65vh] overflow-hidden select-none">
      {/* Background depth & gradient overlay like Hero */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/15 via-transparent to-black/35 z-0" />

      {/* Top Row: Taglines, Credential, Availability */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 uppercase text-xs tracking-wider items-start">
        {/* Column 1: Professional Taglines with crisp white accent bar */}
        <div className="flex flex-col space-y-2 border-l-4 border-white pl-4">
          {footerContent.taglines.map((tagline, idx) => (
            <p key={idx} className="leading-snug text-white font-extrabold text-sm drop-shadow-sm">
              {tagline}
            </p>
          ))}
        </div>

        {/* Column 2: Credential & View Work Button */}
        <div className="flex flex-col sm:items-center justify-start space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white text-black font-black text-xs shadow-md tracking-wider">
            {footerContent.credential}
          </span>
          <a
            href="#projects"
            className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-black/60 hover:bg-black text-white font-bold text-xs tracking-widest border border-white/30 backdrop-blur-md transition-all duration-300 hover:scale-105 shadow-md group"
          >
            <span>View Work</span>
            <svg
              className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Column 3: Availability & Year Pill */}
        <div className="flex flex-col sm:items-end justify-start space-y-2">
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-black/50 border border-white/20 backdrop-blur-md shadow-md">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-pulse shadow-[0_0_8px_#6ee7b7]" />
            <span className="font-extrabold text-white text-xs tracking-wider">Available for opportunities</span>
          </div>
          <span className="font-black text-black/90 text-base tracking-widest">{currentYear}</span>
        </div>
      </div>

      {/* Middle: Oversized Bold Brand Name with Hero black-on-red theme & interactive hover */}
      <div className="relative z-10 py-12 sm:py-16 md:py-20 text-center overflow-hidden group cursor-pointer">
        <h2 className="text-[13vw] sm:text-[14vw] md:text-[14vw] leading-none font-black tracking-tighter lowercase text-black group-hover:text-white transition-colors duration-500 ease-in-out whitespace-nowrap drop-shadow-md select-none inline-block">
          {personalInfo.brandName.toLowerCase()}
          <span className="text-white group-hover:text-black transition-colors duration-500 ease-in-out drop-shadow-lg">.</span>
        </h2>
      </div>

      {/* Bottom Row: Links, Attribution, Socials & Contact */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-8 items-end pt-8 border-t border-black/20 text-xs">
        {/* Column 1: Contact link, Copyright & TAP Academy Credit */}
        <div className="flex flex-col space-y-2">
          <a
            href="#contact"
            className="inline-block w-fit px-4 py-1.5 rounded-full bg-black text-white hover:bg-white hover:text-black font-extrabold uppercase tracking-widest text-xs transition-all duration-300 shadow-md"
          >
            Contact
          </a>
          <p className="text-black/85 font-bold text-xs pt-1">
            {footerContent.copyright}
          </p>
          <p className="text-black/85 font-semibold text-xs">
            Trained at{' '}
            <a
              href={academy.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-black font-black underline underline-offset-2 transition-colors"
            >
              {academy.name}
            </a>
          </p>
        </div>

        {/* Column 2: Email & Hero-Style Circular Social Icons */}
        <div className="flex flex-col sm:items-center space-y-4">
          <a
            href={`mailto:${personalInfo.emails.primary}`}
            className="px-4 py-1.5 rounded-full bg-white/20 hover:bg-white text-black hover:text-black font-mono font-bold text-xs border border-black/10 backdrop-blur-md transition-all duration-300 underline underline-offset-4"
          >
            {personalInfo.emails.primary}
          </a>
          <div className="flex items-center space-x-4 text-white">
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
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
                className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
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
                className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Column 3: Primary CTA Pill matching Hero style */}
        <div className="flex flex-col sm:items-end justify-end">
          <a
            href={socialLinks.github || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white text-black hover:bg-black hover:text-white font-extrabold text-xs tracking-wider transition-all duration-300 hover:scale-105 shadow-xl group"
          >
            <span>Explore My GitHub</span>
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import { internshipsList } from '../data/portfolioData'

function InternshipCard({ intern, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Top Row: Duration & Mini Badge */}
        <div className="flex justify-between items-center gap-4 mb-4">
          <span className="font-mono text-white/50 text-xs md:text-sm uppercase tracking-wider">
            {intern.duration}
          </span>
          <span className="px-3 py-1 rounded-full bg-white/10 text-white font-mono text-xs uppercase tracking-wider border border-white/20">
            Internship
          </span>
        </div>

        {/* Role & Organization */}
        <h3 className="text-2xl font-black text-white mt-2 mb-1 tracking-tight">
          {intern.role}
        </h3>
        <p className="uppercase font-bold text-red-200 tracking-wide text-sm mb-6">
          {intern.organization}
        </p>

        {/* Skills Gained List */}
        <div className="mb-6">
          <p className="text-xs uppercase tracking-widest font-mono text-white/70 mb-3 font-semibold">
            Skills Gained:
          </p>
          <ul className="space-y-2.5 text-sm text-red-50/90 leading-relaxed">
            {intern.skills.map((skill, i) => (
              <li key={i} className="flex items-start">
                <span className="text-black font-extrabold mr-2 shrink-0">•</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Row: Technologies */}
      <div className="border-t border-white/10 pt-5 mt-auto">
        <p className="text-xs uppercase tracking-widest font-mono text-white/70 mb-3 font-semibold">
          Technologies:
        </p>
        <div className="flex flex-wrap gap-2">
          {intern.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md bg-black/40 border border-white/10 text-xs font-mono text-white/90"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function Internships() {
  return (
    <section
      id="experience"
      className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Torn Paper Divider from dark section above */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none rotate-180 -translate-y-[1px]">
        <svg
          className="relative block w-full h-12 md:h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"
            className="fill-[#0a0a0a]"
          />
        </svg>
      </div>

      {/* Decorative Pulsing Star (Bottom Left) */}
      <svg
        className="absolute bottom-12 left-8 w-12 h-12 text-black opacity-20 animate-pulse pointer-events-none"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centered Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-black tracking-tight mb-4">
            Work Experience
          </h2>
          <p className="text-red-100 max-w-2xl mx-auto text-base md:text-lg font-medium">
            Practical industry exposure and software engineering internships applying Java full-stack technologies in real-world scenarios.
          </p>
        </div>

        {/* Grid of Internship Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 justify-center">
          {internshipsList.map((intern, index) => (
            <InternshipCard
              key={`${intern.organization}-${index}`}
              intern={intern}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Internships

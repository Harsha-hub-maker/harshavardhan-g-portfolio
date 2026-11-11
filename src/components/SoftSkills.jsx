import { softSkillsList } from '../data/portfolioData'

function SoftSkillCard({ skill, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="group bg-[#f8f8f8] border border-gray-200 rounded-3xl p-6 min-h-[220px] text-center flex flex-col items-center justify-start hover:scale-[1.03] hover:border-red-400/40 hover:shadow-[0_10px_30px_rgba(255,42,42,0.12)] transition-all duration-300"
    >
      {/* Icon in rounded square that tints red and scales on hover */}
      <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-2xl shadow-sm mb-4 transition-all duration-300 group-hover:bg-red-50 group-hover:border-red-200 group-hover:scale-110 select-none">
        <span role="img" aria-label={skill.name}>
          {skill.icon}
        </span>
      </div>

      {/* Uppercase Skill Name */}
      <h3 className="text-base font-black uppercase tracking-wide text-gray-900 mb-2 transition-colors duration-200 group-hover:text-[#ff2a2a]">
        {skill.name}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
        {skill.desc}
      </p>
    </div>
  )
}

function SoftSkills() {
  return (
    <section
      id="skills-soft"
      className="bg-white pt-24 pb-32 px-6 md:px-12 relative overflow-hidden bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:60px_60px]"
    >
      {/* Torn-paper divider at the top (from previous dark section) */}
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centered Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 font-mono text-xs uppercase tracking-widest font-semibold mb-4">
            Core Competencies
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-gray-900 tracking-tight mb-4">
            Professional Soft Skills
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
            Essential interpersonal and problem-solving qualities that elevate software development, agile collaboration, and delivery.
          </p>
        </div>

        {/* 4-column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkillsList.map((skill, index) => (
            <SoftSkillCard
              key={skill.name}
              skill={skill}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SoftSkills

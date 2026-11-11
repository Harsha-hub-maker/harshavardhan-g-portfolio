import { technicalSkills } from '../data/portfolioData'

function SkillBadge({ name }) {
  return (
    <span className="inline-flex items-center rounded-full px-4 py-2 bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-red-600/20 transition-colors duration-200">
      {name}
    </span>
  )
}

function SkillCard({ category, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:border-red-500/30 hover:shadow-[0_0_25px_rgba(239,68,68,0.2)] flex flex-col justify-between"
    >
      <div>
        <h3 className="text-xl font-black text-white uppercase tracking-wider pb-3 border-b border-white/10 mb-4">
          {category.title}
        </h3>
        <div className="flex flex-wrap gap-3">
          {category.skills.map((skill) => (
            <SkillBadge key={skill.name} name={skill.name} />
          ))}
        </div>
      </div>
    </div>
  )
}

function TechnicalSkills() {
  return (
    <section
      id="skills"
      className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Blurred background red glow circles */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-mono text-xs uppercase tracking-widest mb-4">
            Technical Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            My Skillset
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-base">
            Core technologies, programming languages, backend frameworks, and engineering tools I utilize to craft scalable applications.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {technicalSkills.categories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnicalSkills

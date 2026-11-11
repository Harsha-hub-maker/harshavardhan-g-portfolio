import { leadershipList } from '../data/portfolioData'

function LeadershipItem({ item, index }) {
  const isEven = index % 2 === 0

  return (
    <div className="relative mb-12 last:mb-0">
      {/* Red Glowing Timeline Dot */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-[#ff2a2a] shadow-[0_0_14px_#ff2a2a] border-2 border-[#0a0a0a] z-20" />

      {/* Alternating Row Container */}
      <div className="pl-12 md:pl-0 flex flex-col md:flex-row items-center justify-between w-full">
        {/* Even Index: Card on Left (md:text-right) */}
        {isEven ? (
          <>
            <div
              data-aos="fade-right"
              className="w-full md:w-[45%] md:text-right"
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/30 hover:shadow-[0_0_20px_rgba(255,42,42,0.1)] transition-all duration-300">
                {item.badge && (
                  <div className="mb-3 md:flex md:justify-end">
                    <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 text-red-400 font-mono text-xs uppercase tracking-widest font-semibold border border-red-500/20">
                      {item.badge}
                    </span>
                  </div>
                )}
                <h3 className="text-xl md:text-2xl font-black text-white tracking-tight hover:text-[#ff2a2a] transition-colors duration-200 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-mono uppercase tracking-wider text-red-400 font-semibold mb-3">
                  {item.role}
                </p>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
            {/* Empty Spacer on Right */}
            <div className="hidden md:block md:w-[45%]" />
          </>
        ) : (
          /* Odd Index: Card on Right (md:text-left) */
          <>
            {/* Empty Spacer on Left */}
            <div className="hidden md:block md:w-[45%]" />
            <div
              data-aos="fade-left"
              className="w-full md:w-[45%] md:text-left"
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-red-500/30 hover:shadow-[0_0_20px_rgba(255,42,42,0.1)] transition-all duration-300">
                {item.badge && (
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 text-red-400 font-mono text-xs uppercase tracking-widest font-semibold border border-red-500/20">
                      {item.badge}
                    </span>
                  </div>
                )}
                <h3 className="text-xl md:text-2xl font-black text-white tracking-tight hover:text-[#ff2a2a] transition-colors duration-200 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-mono uppercase tracking-wider text-red-400 font-semibold mb-3">
                  {item.role}
                </p>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

function Leadership() {
  return (
    <section
      id="activities"
      className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Torn Paper Divider from Red Internships Section */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none rotate-180 -translate-y-[1px]">
        <svg
          className="relative block w-full h-12 md:h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"
            className="fill-[#ff2a2a]"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Centered Header */}
        <div data-aos="fade-up" className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-mono text-xs uppercase tracking-widest mb-4">
            Activities
          </span>
          <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tight mb-4">
            Leadership & Engagement
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-base md:text-lg">
            Competitive technical hackathons, algorithmic coding challenges, and collegiate cultural participation.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Gradient Timeline Line */}
          <div className="absolute top-4 bottom-4 left-4 md:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#ff2a2a] via-red-500/50 to-white/10" />

          {/* Timeline Items List */}
          <div className="relative z-10">
            {leadershipList.map((item, index) => (
              <LeadershipItem
                key={`${item.title}-${index}`}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Leadership

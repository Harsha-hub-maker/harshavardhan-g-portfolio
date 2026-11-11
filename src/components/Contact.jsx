import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData'

function Contact() {
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  // Parallax effect for the giant background text
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')

    const firstName = formRef.current?.querySelector('#firstName')?.value?.trim() || ''
    const lastName = formRef.current?.querySelector('#lastName')?.value?.trim() || ''
    const email = formRef.current?.querySelector('#email')?.value?.trim() || ''
    const message = formRef.current?.querySelector('#message')?.value?.trim() || ''

    if (!firstName || !email || !message) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    const { serviceId, templateId, publicKey } = emailjsConfig
    const isConfigured =
      Boolean(serviceId && templateId && publicKey) &&
      serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY'

    if (!isConfigured) {
      // Fallback: direct mailto client
      const subject = encodeURIComponent(`Portfolio Contact from ${firstName} ${lastName}`)
      const body = encodeURIComponent(
        `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
      )
      window.open(`mailto:${personalInfo.emails.primary}?subject=${subject}&body=${body}`, '_blank')
      setStatus('success')
      formRef.current?.reset()
      setTimeout(() => setStatus('idle'), 3000)
    } else {
      // Send via EmailJS browser SDK
      try {
        const emailjs = await import('@emailjs/browser')
        await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
        setStatus('success')
        formRef.current?.reset()
      } catch (err) {
        console.error('EmailJS submission error:', err)
        setStatus('error')
      }
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Background Giant Parallax "Contact" Word */}
      <motion.div
        style={{ y }}
        className="absolute top-10 left-4 md:left-12 pointer-events-none z-0"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/5"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </div>
      </motion.div>

      {/* Foreground Red Card Aligned to the Right */}
      <div
        data-aos="fade-up"
        className="bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] ml-auto p-8 md:p-16 relative z-10 shadow-2xl"
      >
        {/* Header Row */}
        <div className="flex justify-between items-center pb-6 border-b border-black/10">
          <span className="text-xs uppercase tracking-[0.2em] font-mono text-black font-bold">
            Reach Me
          </span>
          {socialLinks.instagram && (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full bg-black/20 hover:bg-black/30 text-white font-mono text-xs uppercase tracking-wider transition-colors duration-200 border border-black/20"
            >
              DM on Instagram
            </a>
          )}
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-12 mt-10"
        >
          {/* Two-Column Form Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Inputs */}
            <div className="flex flex-col space-y-8">
              <input
                id="firstName"
                name="first_name"
                type="text"
                placeholder="First Name *"
                required
                className="bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white/80 focus:outline-none focus:border-white transition-colors duration-200"
              />
              <input
                id="lastName"
                name="last_name"
                type="text"
                placeholder="Last Name"
                className="bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white/80 focus:outline-none focus:border-white transition-colors duration-200"
              />
              <input
                id="email"
                name="user_email"
                type="email"
                placeholder="Email Address *"
                required
                className="bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white/80 focus:outline-none focus:border-white transition-colors duration-200"
              />
            </div>

            {/* Right Message Textarea */}
            <div className="flex flex-col">
              <textarea
                id="message"
                name="message"
                placeholder="Your Message *"
                required
                rows={5}
                className="bg-transparent border-b border-white/40 pb-3 text-lg text-white placeholder-white/80 focus:outline-none focus:border-white transition-colors duration-200 resize-none min-h-[140px] w-full"
              />
            </div>
          </div>

          {/* Bottom Area: Checkbox, Details, Urgency Link & Submit Button */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 pt-4 border-t border-black/10">
            <div className="flex flex-col space-y-3 max-w-md">
              <label className="flex items-center space-x-3 text-white/95 text-sm cursor-pointer select-none">
                <input
                  type="checkbox"
                  defaultChecked
                  required
                  className="w-4 h-4 rounded accent-black cursor-pointer"
                />
                <span>I agree to be contacted regarding this inquiry.</span>
              </label>
              <p className="text-white/80 text-xs leading-relaxed">
                Your message will be sent directly to my inbox. I typically respond within 24-48 hours.
              </p>
              <p className="text-white/90 text-xs">
                Need an urgent response? Email me directly at{' '}
                <a
                  href={`mailto:${personalInfo.emails.primary}`}
                  className="underline font-bold text-black hover:text-white transition-colors"
                >
                  {personalInfo.emails.primary}
                </a>
              </p>
            </div>

            {/* Dynamic Status Submit Button */}
            <div className="w-full sm:w-auto">
              {status === 'sending' && (
                <button
                  type="button"
                  disabled
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full bg-white/20 border border-white/40 text-white font-bold text-base cursor-wait opacity-80"
                >
                  <svg
                    className="animate-spin w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  <span>Sending...</span>
                </button>
              )}

              {status === 'success' && (
                <button
                  type="button"
                  disabled
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-emerald-600 border border-emerald-500 text-white font-bold text-base shadow-lg select-none"
                >
                  <span>Sent Successfully ✓</span>
                </button>
              )}

              {status === 'error' && (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-red-950 border border-red-700 text-white font-bold text-base shadow-lg"
                >
                  <span>Failed — Try Again</span>
                </button>
              )}

              {status === 'idle' && (
                <button
                  type="submit"
                  className="group w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-full bg-black text-white border border-black font-bold text-base transition-all duration-300 hover:bg-white hover:text-[#ff2a2a] hover:border-white shadow-xl cursor-pointer"
                >
                  <span>Send Message</span>
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact

# Harshavardhan G — Portfolio

Personal developer portfolio showcasing Java Full Stack projects, technical skills, and professional experience.

🌐 **Live site:** https://YOUR-SITE-URL/

---

## Tech Stack

| Layer | Technology |
|---|---|
| UI Framework | React 19 |
| Build Tool | Vite |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion, AOS |
| Contact Form | EmailJS |
| Cursor Effect | WebGL (React Bits SplashCursor) |

---

## Run Locally

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build
```

---

## Environment Variables

Create a `.env.local` file in the project root with the following variables to enable EmailJS form submission. If omitted, the contact form falls back to your default email client.

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## Project Structure

```
src/
├── assets/          # Hero video, portrait image
├── components/      # One component per section
├── data/
│   └── portfolioData.js   # All personal content lives here
└── index.css        # Tailwind v4 + global theme
public/
├── Resume.pdf
├── favicon.svg
├── og-image.png     # Open Graph / Twitter Card preview
├── robots.txt
└── sitemap.xml
```

---

## Credits

Built during the placement training program at [TAP Academy](https://thetapacademy.com/) (full-stack development, AI and augmented reality training).

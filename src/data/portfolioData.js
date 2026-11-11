// ============================================================
// portfolioData.js
// This file controls all personal content and links on the website.
// ============================================================

export const personalInfo = {
  name: "Harshavardhan G",
  firstName: "Harshavardhan G",
  brandName: "Harshavardhan G", // shown in the preloader, navbar and footer
  title: "Java Full Stack Developer",
  location: "Bangalore, India",
  phone: "+918618084496",
  emails: {
    primary: "harshavardhanag2003@gmail.com",
    secondary: "",
  },
  summary:
    "2026 Computer Science and Engineering graduate passionate about Java Full Stack Development, backend technologies, and building practical, user-friendly web applications.",
  resumeUrl: "/Resume.pdf", // put the PDF inside /public
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/Harsha-hub-maker",
  linkedin: "https://www.linkedin.com/in/harsha-vardhana-g-983821266/",
  instagram: "https://www.instagram.com/harshavardhan_online/",
};

export const heroContent = {
  greeting: "Hi, I'm Harshavardhan G",
  titleHighlight: "Java Full Stack Developer",
  subtitle:
    "Passionate Computer Science graduate building robust Java backends, scalable REST APIs, and responsive, user-friendly web applications.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:harshavardhanag2003@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Resume.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  // HTML is allowed here (it is rendered with dangerouslySetInnerHTML)
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Harshavardhan G</span>, a 2026 Computer Science and Engineering graduate based in Bangalore. With a strong foundation in Java, Data Structures, OOP, SQL, and modern web development, I am sharpening my skills through the placement training program at TAP Academy. I enjoy solving programming problems and building clean, reliable full-stack software applications.`,
  techStack: ["Java", "Spring Boot", "MySQL", "JavaScript", "React", "HTML5 & CSS3"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description:
    "A structured, disciplined approach to engineering reliable full-stack applications from concept to deployment.",
  cards: [
    {
      number: "01",
      title: "Research",
      text: "Analyze user requirements, assess system feasibility, and establish clear architectural and domain models.",
    },
    {
      number: "02",
      title: "Design",
      text: "Design normalized database schemas, outline RESTful API contracts, and craft responsive user interface layouts.",
    },
    {
      number: "03",
      title: "Develop",
      text: "Implement backend logic with Java and Spring Boot, build dynamic frontends, and write clean, maintainable code.",
    },
    {
      number: "04",
      title: "Deploy",
      text: "Test endpoints with Postman, manage version control via Git and GitHub, and deliver robust application builds.",
    },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [
        { name: "Java" },
        { name: "SQL" },
        { name: "JavaScript" },
        { name: "OOP" },
        { name: "DSA" },
      ],
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Spring Boot" },
        { name: "Spring Data JPA" },
        { name: "Hibernate" },
        { name: "REST APIs" },
      ],
    },
    {
      title: "Frontend & Databases",
      skills: [
        { name: "HTML5" },
        { name: "CSS3" },
        { name: "JavaScript" },
        { name: "MySQL" },
      ],
    },
    {
      title: "Tools & Methodologies",
      skills: [
        { name: "Git & GitHub" },
        { name: "Postman" },
        { name: "IntelliJ IDEA" },
        { name: "AWS" },
        { name: "Agile & SDLC" },
      ],
    },
  ],
};

export const leadershipList = [
  {
    title: "Technical Hackathon",
    description:
      "Secured 4th rank in a competitive technical hackathon, demonstrating software development skills and efficient team collaboration under tight deadlines.",
    role: "Team Contributor",
    badge: "4th Rank",
  },
  {
    title: "Programming Challenges",
    description:
      "Actively participated in competitive coding contests focusing on Java programming, Data Structures, Algorithms, and logical problem-solving.",
    role: "Contestant",
    badge: "Problem Solving",
  },
  {
    title: "Kannada Kalothsava",
    description:
      "Participated in college cultural activities and community events celebrating regional heritage and arts.",
    role: "Participant",
    badge: "Cultural",
  },
];

export const internshipsList = [
  {
    organization: "Tap Academy",
    role: "Java Full Stack Intern",
    duration: "6 Months",
    skills: [
      "Worked on responsive web development using HTML5, CSS3, and JavaScript",
      "Practiced Java programming, Object-Oriented Programming, and Data Structures & Algorithms",
      "Wrote SQL queries to retrieve, filter, sort, and manipulate relational data using MySQL",
      "Used Git and GitHub for version control and project collaboration",
      "Gained practical exposure to backend development fundamentals and SDLC practices",
    ],
    tech: ["Java", "SQL", "MySQL", "HTML5", "CSS3", "JavaScript", "Git", "GitHub"],
  },
];

export const softSkillsList = [
  {
    name: "Team Collaboration",
    icon: "🤝",
    desc: "Collaborate effectively in team environments, aligning with peers to deliver software solutions during sprints and hackathons.",
  },
  {
    name: "Problem Solving",
    icon: "🧩",
    desc: "Break down complex algorithmic challenges and application bugs into clear, structured, and manageable steps.",
  },
  {
    name: "Analytical Thinking",
    icon: "📈",
    desc: "Evaluate technical requirements, design relational database structures, and optimize code efficiency.",
  },
  {
    name: "Adaptability",
    icon: "⚡",
    desc: "Quickly learn new tools, embrace evolving technology stacks, and adapt smoothly to modern developer workflows.",
  },
];

export const projects = [
  {
    id: "fashion-store",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Fashion Store – Fashion E-commerce Web Application",
    description:
      "Developing an e-commerce application with dynamic product browsing, organized catalog listings, and robust product and order data management.",
    techTags: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate",
      "MySQL",
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
    links: { github: "https://github.com/Harsha-hub-maker", demo: "" },
    isFlagship: true,
  },
  {
    id: "employee-management-system",
    number: "02",
    badge: null,
    title: "Employee Management System",
    description:
      "Developed employee management functionality using Java with user-facing web pages and responsive client-side interactions for managing employee records.",
    techTags: ["Java", "HTML5", "CSS3", "JavaScript"],
    links: { github: "https://github.com/Harsha-hub-maker", demo: "" },
    isFlagship: false,
  },
  {
    id: "careconnect",
    number: "03",
    badge: "💡 Concept",
    title: "CareConnect – Patient Care Assistance Platform (Concept)",
    description:
      "Conceptualized a platform connecting families with patient-care assistants and coordinating care requests seamlessly.",
    techTags: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
      "MySQL",
    ],
    links: { github: "https://github.com/Harsha-hub-maker", demo: "" },
    isFlagship: false,
  },
];

// Used only by the optional Certificates component (bonus step)
export const certificates = {
  featured: [
    { name: "Java Full Stack Internship Training", issuer: "TAP Academy", icon: "🏅" },
    { name: "4th Rank – Technical Hackathon", issuer: "Technical Hackathon", icon: "🏆" },
  ],
  viewAllUrl: "https://www.linkedin.com/in/harsha-vardhana-g-983821266/",
};

export const education = {
  degree: "B.E. in Computer Science and Engineering",
  institution: "PES College of Engineering, Mandya",
  cgpa: "2022 - 2026",
  graduation: "2026",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: [
    "Java Full Stack Developer",
    "Spring Boot · MySQL · REST APIs",
    "Building Scalable & Practical Web Solutions",
  ],
  credential: "B.E. Computer Science and Engineering",
  copyright: `© ${new Date().getFullYear()} Harshavardhan G | Built with React`,
};

// EmailJS — read from .env.local (variables must start with VITE_)
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};

// PortfolioData.ts — all facts sourced from owner; TODOs marked explicitly

export const portfolioData = {
  name: "Ankan Maity",
  profileImage: "/images/profile/profile.jpg",

  // ---------- Hero ----------
  headline: "Full-stack developer: React, TypeScript, .NET, PostgreSQL",
  subline: "I build IoT-connected web systems and CAD automation tools.",
  // TODO(Ankan): Confirm availability wording; add "Remote / Kolkata" if desired
  availabilityBadge: "Open to full-time roles",

  // ---------- Contact / Social (real URLs from repo) ----------
  contact: {
    email: "maityankan55@gmail.com",
    github: "https://github.com/Ankan5960",
    linkedin: "https://www.linkedin.com/in/ankan-maity-a1b44927a/",
    // TODO(Ankan): Supply the resume PDF at public/Ankan-Maity-Resume.pdf
    resume: "/Ankan-Maity-Resume.pdf",
  },

  // ---------- About ----------
  // Rewritten: concrete, short, no adjective stacking (Task 5)
  about: [
    `I'm a full-stack developer. My main project, EcoBin, is a .NET and React system that connects IoT bins to a routing dashboard—built with microservices, Docker, and role-based auth.`,
    `I also write AutoCAD plugins in C# that automate repetitive design workflows using the Autodesk Platform Services API.`, // TODO(Ankan): add what was automated, for whom
    `I'm looking for a full-time software engineering role where I can work across the stack.`,
  ],

  // ---------- Skills (Task 6: proven, grouped) ----------
  skills: {
    strong: [
      { label: "TypeScript",      project: "EcoBin" },
      { label: "React",           project: "EcoBin" },
      { label: "ASP.NET Core",    project: "EcoBin" },
      { label: "PostgreSQL",      project: "EcoBin" },
      { label: "Docker",          project: "EcoBin" },
      { label: "REST APIs",       project: "EcoBin" },
      { label: "Microservices",   project: "EcoBin" },
      { label: "Git & GitHub",    project: "All projects" },
      { label: "C#",              project: "CAD tools" },
    ],
    working: [
      { label: "Node.js / Express", project: null },
      { label: "Python",            project: null },
      { label: "C / C++",           project: "Voting machine" },
      { label: "Arduino / ESP32",   project: "Voting machine" },
      { label: "Raspberry Pi",      project: null },
      // TODO(Ankan): Include AWS/GCP only if actually used in a project
      // TODO(Ankan): Include Three.js only if actually used in a project
    ],
  },

  // ---------- Projects (Tasks 2, 3, 4) ----------
  // Project 4 (tutorial card) removed entirely
  projects: [
    {
      id: 1,
      title: "EcoBin: Smart Waste Management",
      description:
        "IoT bins report fill levels to a web dashboard so collectors can plan routes. Role-based access for admins, collectors, users, and guests.",
      // TODO(Ankan): Add one real number if it exists — bins simulated, API endpoints, test coverage
      stack: [".NET Web API", "PostgreSQL", "React", "TypeScript", "Tailwind", "Docker"],
      sourceUrl: "https://github.com/Ankan5960/EcoBin",
      liveUrl: null, // TODO(Ankan): live demo URL if deployed
      image: "/images/projects/ecobin.jpg",
      imageCaption: "EcoBin dashboard",
    },
    {
      id: 2,
      title: "Fingerprint Electronic Voting Machine",
      description:
        "Prototype where a voter is verified by fingerprint before a vote can be cast, preventing duplicate votes without paper ballots.",
      stack: ["Arduino", "C/C++", "Fingerprint sensor", "LCD"],
      sourceUrl: "https://github.com/Ankan5960/Fingerprint-based-electronic-voting-machine",
      liveUrl: null,
      // Using circuit diagram image; caption makes it clear what it shows
      image: "https://github.com/Ankan5960/Fingerprint-based-electronic-voting-machine/raw/main/circuit-diagram/circuit.png",
      // TODO(Ankan): Replace with a photo of the actual physical build if one exists
      imageCaption: "Circuit design",
    },
    {
      id: 3,
      title: "Maity Enterprise: Broadband Plans & Coverage",
      description:
        "Customer-facing site for a fiber broadband provider. Users can compare plans and find their nearest optical splitter on an interactive map.",
      // TODO(Ankan): Confirm client/business name and whether site is live in production
      stack: ["React", "JavaScript", "CSS", "Geolocation API"],
      sourceUrl: null, // TODO(Ankan): public source link if available
      liveUrl: "https://maity-enterprise.netlify.app/Home",
      image: "/images/projects/maityenterprice.png",
      imageCaption: "Maity Enterprise site",
    },
  ],

  // ---------- Education ----------
  education: [
    {
      id: 1,
      institution: "Techno International NewTown, Kolkata",
      degree: "B.Tech — Electronics and Communication Engineering",
      detail: "CGPA: 7.57",
      year: "2021 – 2025",
    },
    {
      id: 2,
      institution: "Nohari High School",
      degree: "Higher Secondary (Class XI–XII)",
      detail: null,
      year: "2019 – 2021",
    },
    {
      id: 3,
      institution: "Nohari High School",
      degree: "Secondary (Class X)",
      detail: null,
      year: "2019",
    },
  ],

  // ---------- Certifications ----------
  certifications: [
    {
      id: 1,
      name: "Autodesk Platform Services: Basic Viewer and JavaScript",
      organization: "Udemy",
      year: "2025",
      // TODO(Ankan): Add Udemy certificate verification link if public
    },
    {
      id: 2,
      name: "The Complete 2024 Web Development Bootcamp",
      organization: "Udemy",
      year: "2024",
      // TODO(Ankan): Add Udemy certificate verification link if public
    },
  ],
};

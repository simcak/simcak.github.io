//////////
// HOME //
//////////
export const siteConfig = {
  name: "My Portfolio",
  title: "Simcak's Portfolio",
  description: "A showcase of my work and thoughts",
  social: {
    github: "https://github.com/simcak",
    linkedin: "https://www.linkedin.com/in/petr-simcak",
    email: "mailto:fjords_headset.7w@icloud.com",
  },
};

export const homeContent = {
  title: "Hello, I'm Petr",
  description:
    "A passionate frontend developer with a keen eye for design and a love for creating beautiful, functional web experiences.",
  buttons: {
    about: {
      text: "View About",
      href: "/about/",
    },
    projects: {
      text: "See Projects",
      href: "/projects/",
    },
    cv: {
      text: "CV",
      href: "/assets/pdf/cv.pdf",
    },
  },
  images: {
    light: "https://multiplepage-portfolio.edgeone.app/assets/images/tech-background-light.svg",
    dark: "/assets/images/tech-background-dark.svg",
  },
};

///////////
// ABOUT //
///////////
export const aboutContent = {
  meta: {
    title: "About - Simcak",
    description: "Learn more about my background, skills, and experience",
  },
  title: "About Me",
  description:
    "This is where you can introduce yourself or your company. Share your story, mission, and values. Explain what makes you unique and why people should be interested in your work. Keep it concise but engaging.",
  skills: [
    "C",
    "C++",
    // "JavaScript",
    // "Swift",
    "Python",
    "Matlab",
    "Shell",
    "Git",
    "Linux",
    "Docker",
    "Nginx",
  ],
  image: {
    src: "/assets/images/about/coder.jpg",
    alt: "Profile",
  },
  experience: {
    title: "Experience",
    items: [
      {
        period: "2022 - Present",
        position: "Senior Frontend Developer",
        company: "Tencent Cloud",
        description:
          "Leading frontend development for EdgeOne platform and templates.",
      },
      {
        period: "2020 - 2022",
        position: "Frontend Developer",
        company: "Tencent Cloud",
        description:
          "Developed and maintained multiple web applications and tools.",
      },
      {
        period: "2018 - 2020",
        position: "Junior Developer",
        company: "Tencent Cloud",
        description: "Worked on various client projects and internal tools.",
      },
    ],
  },
  connect: {
    title: "Let's Connect",
    description:
      "Feel free to reach out if you want to collaborate or just say hi! You can find us on social media or drop us an",
    email: {
      text: "email",
      href: "mailto:fjords_headset.7w@icloud.com",
    },
  },
  education: {
    title: "Education",
    items: [
      {
        period: "2020 - 2024",
        degree: "Bachelor of Sport Technology",
        institution: "Brno University of Technology",
        description: "Focused on software development and algorithms.",
      },
      {
        period: "2023 - 2026",
        degree: "Common Core",
        institution: "École 42",
        description: "Specialized in advanced topics in computer science.",
      },
    ],
  },
};

//////////////
// PROJECTS //
//////////////
export const projectsContent = {
  meta: {
    title: "Projects - Simcak",
    description: "Showcase of my best work and projects",
  },
  title: "Projects",
  description:
    "Here you can showcase your best work. Each project should include a brief description, the technologies used, and any notable achievements. This helps potential clients or employers understand your capabilities.",
  projects: [
    // {
    //   title: "Transcendence",
    //   description:
    //     "A brief description of your first project. Explain what it does and what technologies you used.",
    //   image: "/assets/images/projects/project1.gif",
    //   href: "#",
    // },
    {
      title: "Cub3D",
      description:
        "3D Graphic game written in C. It is simplified Wolfenstein 3D. It is based on raycasting and parsing algorithm.",
      image: "/assets/images/projects/Cub3D.gif",
      href: "https://github.com/simcak/Core/tree/main/11_CUB3D",
    },
    {
      title: "IRC",
      description:
        "Share details about your third project. What problems did it solve? What was the outcome?",
      image: "/assets/images/projects/project1.jpg",
      href: "#",
    },
    {
      title: "Bachelor Thesis",
      description:
        "Heart Rate Estimation from the PPG Signals. Code is done in Python and the thesis is written in LaTeX.",
      image: "/assets/images/projects/bakalarka.gif",
      href: "/assets/images/projects/bakalarka.pdf",
    },
    // {
    //   title: "iProtect",
    //   description:
    //     "A brief description of your first project. Explain what it does and what technologies you used.",
    //   image: "/assets/images/projects/project1.jpg",
    //   href: "#",
    // },
  ],
};

//////////////////
// CERTIFICATES //
//////////////////
export const certificatesContent = {
  meta: {
    title: "Certificates - Simcak",
    description: "Showcase of my certificates and achievements",
  },
  title: "Certificates",
  description:
    "Here you can showcase your certificates and achievements. Each certificate should include a brief description and the issuing organization.",
  certificates: [
    {
      title: "Mensa Card",
      description: "Description of certificate 1.",
      image: "/assets/images/certificates/mensa.png",
      pdf: "http://www.mensa.cz/qr?id=9ynnqr33h",
      issuer: "Mensa",
      date: "2021",
    },
    {
      title: "National Math Testing",
      description: "Description of certificate 1.",
      image: "/assets/images/certificates/scio.png",
      pdf: "/assets/images/certificates/scio_mat.pdf",
      issuer: "SCIO",
      date: "2019",
    },
    {
      title: "Curs Elements of AI",
      description: "Description of certificate 2.",
      image: "/assets/images/certificates/elements_of_AI.png",
      pdf: "/assets/images/certificates/elements_of_AI.pdf",
      issuer: "Elements of AI",
      date: "2023",
    },
  ],
};


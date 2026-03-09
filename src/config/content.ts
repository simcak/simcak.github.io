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
  title: "Hi, it's Petr",
  description:
    "",
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
  title: "About",
  technicalSkills: [
    "C",
    "C++",
    // "JavaScript",
    // "Swift",
    "Python",
    "Matlab",
    "Shell",
    "Git",
    "Docker",
    "Nginx",
    "LaTeX",
    "Linux",
    "PrusaSlicer",
    "3D printing",
  ],
  languages: [
    "🇬🇧 fluent",
    "🇨🇿 native",
    "🇩🇪 B1",
  ],
  softSkills: [
    "Creativity",
    "Problem Solving",
    "Team Work",
    "Communication",
    "Cross-cultural Collaboration",
    "Adaptability",
  ],
  image: {
    src: "/assets/images/about/coder.jpg",
    alt: "Profile",
  },
  experience: {
    title: "Experience",
    items: [
      // {
      //   period: "2026 - Present",
      //   position: "Junior IT support specialist",
      //   company: "42Prague",
      //   description: "Worked on various client projects and internal tools.",
      // },
      {
        period: "2013 - 2021",
        position: "Movie Actor",
        company: "Czech, German and US productions",
        description:"Performed in multiple movies and TV shows in multiple languages since the age of 12. The main role was in the movie 'To see the sea' (2014) for which I won the Zlín Film Festival award for the best young actor.",
        icon: "movie",
        link: "https://www.imdb.com/name/nm5791331/",
      },
      {
        period: "2009 - 2015",
        position: "Theatre Actor",
        company: "Brno City Theatre",
        description:"Performed in 7 different plays (including one of the main roles in Marry Poppins) since the age of 8.",
        icon: "theatre",
        link: "https://www.mdb.cz/cs/lide/petr-simcak",
      }
    ],
  },
  aboutMe: {
    title: "About Me",
    description:
      "I am a developer who enjoys understanding systems in depth and building a clean software with care. I am drawn to challenging problems, practical implementation, and the kind of work that pushes me to think clearly and keep learning. I value thoughtful, nice design, technical depth and user experience. I am also a former movie and theatre actor with over 10 years of experience, which has given me a unique perspective on IT from the humanistic standpoint.",
  },
  education: {
    title: "Education",
    items: [
      {
        period: "2023 - 2026",
        degree: "Common Core at 42Prague",
        institution: "École 42",
        description: "Specialized in advanced topics in computer science and low level programming.",
        link: "https://www.42prague.com"
      },
      {
        period: "2020 - 2024",
        degree: "Bachelor of Sport Technology",
        institution: "Brno University of Technology",
        description: "Focused on signal processing and analysis with applications in sports and health.",
        link: "https://www.vut.cz/en/students/programmes/programme/6264"
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
    "Here is a curated set of projects that reflects my growth as a developer, my hands-on approach to problem-solving, and my focus on thoughtful design, technical depth, and turning ideas/assignments into something real.",
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
      title: "Bachelor Thesis",
      description:
        "Heart Rate Estimation from the PPG Signals. Code is done in Python and the thesis is written in LaTeX.",
      image: "/assets/images/projects/bakalarka.gif",
      href: "/assets/images/projects/bakalarka.pdf",
    },
    {
      title: "IRC (Internet Relay Chat)",
      description:
        "42 team project: a server written in C++. It supports multiple clients, channels, and basic IRC commands.",
      image: "/assets/images/projects/IRC.png",
      href: "https://github.com/simcak/Core/tree/main/14_IRC",
    },
    // {
    //   title: "iProtect",
    //   description:
    //     "A brief description of your first project. Explain what it does and what technologies you used.",
    //   image: "/assets/images/projects/project1.jpg",
    //   href: "#",
    // },
    {
      title: "Other Projects",
      description:
        "Explore my GitHub profile, where you'll find open-source projects as well as links and brief descriptions of selected private work hosted in organizations.",
      image: "/assets/images/projects/mario_pixelArt_wallpaper.gif",
      href: "https://github.com/simcak",
    },
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
    "Here are my certificates and achievements across different domains.",
  certificates: [
    {
      title: "Mensa Card",
      description: "Proof of membership in Mensa.",
      image: "/assets/images/certificates/mensa.png",
      pdf: "http://www.mensa.cz/qr?id=9ynnqr33h",
      issuer: "Mensa",
      date: "2021",
    },
    {
      title: "National Math Testing",
      description: "Diploma in Mathematics competition.",
      image: "/assets/images/certificates/scio.png",
      pdf: "/assets/images/certificates/scio_mat.pdf",
      issuer: "SCIO",
      date: "2019",
    },
    {
      title: "AI Course",
      description: "Diploma in Elements of AI course.",
      image: "/assets/images/certificates/elements_of_AI.png",
      pdf: "/assets/images/certificates/elements_of_AI.pdf",
      issuer: "Elements of AI",
      date: "2023",
    },
  ],
};


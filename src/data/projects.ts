export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  year: string;
  featured: boolean;
  color: string;
  link?: string;
  details?: {
    overview: string;
    role: string;
    team?: string;
    duration?: string;
    tools?: string[];
    sections: {
      title: string;
      content: string;
      image?: string;
    }[];
  };
}

export const projects: Project[] = [
  {
    id: "microsoft-copilot",
    title: "Microsoft 365 Copilot",
    subtitle: "AI-Powered Writing Assistance",
    description: "Designing agentic experiences for Microsoft 365 Copilot and Microsoft Word, helping millions of users draft, summarize, and comprehend content with AI.",
    image: "/images/projects/copilot.jpg",
    category: "Product Design",
    tags: ["AI/ML", "Enterprise", "Microsoft"],
    year: "2023-Present",
    featured: true,
    color: "#0078D4",
    details: {
      overview: "During a pivotal platform shift driven by AI, I was among the first designers to integrate transformer-based language models (GPT) into Microsoft's ecosystem. My work on Copilot in Word helps users draft, summarize, rewrite, and edit documents with conversational agents.",
      role: "Senior Product Designer",
      team: "Microsoft 365 Design Team",
      tools: ["Figma", "Protopie", "React", "TypeScript"],
      sections: [
        {
          title: "The Challenge",
          content: "How do we introduce AI capabilities to a billion users in a way that feels natural and empowering, not overwhelming? The challenge was to design new patterns and interactions that redefined how people create and edit content."
        },
        {
          title: "Design Approach",
          content: "By designing new patterns and interactions, we redefined how people create and edit content. The system offers tailored suggestions and proactive text transformations while keeping the user in control."
        },
        {
          title: "Agent Mode",
          content: "Agent Mode represents the next leap in Copilot. I've been deeply involved in early design exploration, prototyping interactions for Word, Excel, and PowerPoint that enable autonomous task completion."
        }
      ]
    }
  },
  {
    id: "bayut",
    title: "Bayut Mobile App",
    subtitle: "Real Estate Platform Redesign",
    description: "Led the product design for Bayut's mobile app, introducing data-driven A/B testing and improving feature discoverability for millions of users in the Middle East.",
    image: "/images/projects/bayut.jpg",
    category: "Product Design",
    tags: ["Mobile", "Real Estate", "UAE"],
    year: "2019",
    featured: true,
    color: "#00A651",
    details: {
      overview: "During my one year at Bayut, I worked as a Product Designer on multiple platforms, including the Bayut CRM, mobile app, website, and marketing sites. Most of my focus was on the Bayut Mobile App.",
      role: "Product Designer",
      team: "2 Designers",
      tools: ["Sketch", "InVision", "Zeplin"],
      sections: [
        {
          title: "Navigation Redesign",
          content: "To increase feature discoverability, we replaced the hamburger menu with a bottom navigation bar. Inspired by best practices and user feedback, this shift made key actions more accessible on larger screens."
        },
        {
          title: "A/B Testing Culture",
          content: "I introduced a culture of rapid A/B testing and data-driven decision-making. Internal data and user surveys showed a notable increase in engagement post-launch."
        },
        {
          title: "Results",
          content: "The redesign led to significant improvements in user engagement, feature discovery, and overall app satisfaction scores."
        }
      ]
    }
  },
  {
    id: "makerarm",
    title: "Makerarm",
    subtitle: "Desktop Fabrication System",
    description: "Led the design of Makerarm, a groundbreaking desktop fabrication system that raised over $435,000 on Kickstarter. Designed the browser-based control interface.",
    image: "/images/projects/makerarm.jpg",
    category: "Product Design",
    tags: ["Hardware", "Startup", "Kickstarter"],
    year: "2016",
    featured: true,
    color: "#FF6B35",
    details: {
      overview: "Makerarm is a complete personal fabrication system packed into a single, beautifully designed robotic arm that mounts on the desktop. The project successfully raised over $435,000 on Kickstarter.",
      role: "Lead Product Designer",
      tools: ["Sketch", "Principle", "WebGL", "Three.js"],
      sections: [
        {
          title: "The Vision",
          content: "Leading the design of Makerarm focused on making complex manufacturing processes accessible and user-friendly. The goal was to democratize manufacturing technology."
        },
        {
          title: "Control Software",
          content: "I led the development of Makerarm.io, a browser-based control interface featuring real-time 3D visualization, intuitive controls, and smart tool detection."
        },
        {
          title: "Recognition",
          content: "TechCrunch highlighted the interface's ability to 'make complex fabrication accessible to anyone.' The project exceeded its funding goal by 25%."
        }
      ]
    }
  },
  {
    id: "keeptruckin",
    title: "KeepTruckin Developer Platform",
    subtitle: "Fleet Management APIs",
    description: "Designed KeepTruckin's modern developer platform, empowering partners and developers to access powerful APIs and build tailored fleet management solutions.",
    image: "/images/projects/keeptruckin.jpg",
    category: "Product Design",
    tags: ["Developer Tools", "API", "B2B"],
    year: "2018",
    featured: true,
    color: "#1E88E5",
    details: {
      overview: "I designed a clean, user-centric interface where developers can navigate documentation, manage multiple applications, and monitor real-time usage, optimizing productivity and nurturing a thriving community.",
      role: "Product Designer",
      tools: ["Figma", "React", "Storybook"],
      sections: [
        {
          title: "Research",
          content: "My exploration of Developer Experience (DX) included deep dives into books, case studies, and podcasts about best practices. These insights guided critical decisions on navigation, documentation style, and testing interfaces."
        },
        {
          title: "Design Principles",
          content: "By reducing friction, this platform optimizes productivity and nurtures a thriving community. The focus was on documentation clarity, flexible sandbox environments, and streamlined workflows."
        },
        {
          title: "Impact",
          content: "The platform enabled developers to independently build, test, and publish applications to the marketplace, significantly reducing onboarding time."
        }
      ]
    }
  },
  {
    id: "pyreality",
    title: "pyReality",
    subtitle: "Mixed Reality Data Visualization",
    description: "A Python library for creating immersive mixed reality data visualizations directly within Jupyter Notebooks, developed as part of my master's dissertation.",
    image: "/images/projects/pyreality.jpg",
    category: "Research",
    tags: ["XR", "Python", "Data Viz"],
    year: "2021",
    featured: true,
    color: "#9C27B0",
    details: {
      overview: "pyReality is a Python library developed as part of my master's dissertation project for the Design Informatics programme at the University of Edinburgh. It enables users to create mixed reality data visualizations directly within Jupyter Notebooks.",
      role: "Research & Development",
      tools: ["Python", "WebXR", "Three.js", "Jupyter"],
      sections: [
        {
          title: "The Problem",
          content: "Data scientists often struggle to visualize complex, multi-dimensional datasets in ways that reveal hidden patterns. Traditional 2D visualizations have limitations."
        },
        {
          title: "Solution",
          content: "pyReality supports interactive 3D visualizations through WebXR, allowing users to step into their data and explore it from new perspectives."
        },
        {
          title: "Open Source",
          content: "The library is available on GitHub, enabling researchers and data scientists worldwide to create immersive data experiences."
        }
      ]
    }
  },
  {
    id: "fidget-digits",
    title: "Fidget Digits",
    subtitle: "Self-Tracking Wearable",
    description: "A self-tracking device to track fidgeting behaviour during online lectures, designed to help users become more self-aware without causing distraction.",
    image: "/images/projects/fidget.jpg",
    category: "Research",
    tags: ["Wearable", "UX Research", "Hardware"],
    year: "2020",
    featured: false,
    color: "#E91E63",
    details: {
      overview: "Fidget Digits adds 'physical margins' around the structured digital workspace students work in. Secondary interactions such as fidgeting extrinsically enhance a user's state toward the completion of their primary tasks.",
      role: "Research & Design",
      tools: ["Arduino", "Fusion 360", "Processing"],
      sections: [
        {
          title: "Research Question",
          content: "How can we design a device that does not distract users but helps them become more self-aware about their fidgeting behaviour?"
        },
        {
          title: "Design Principles",
          content: "The design is non-authoritative, non-invasive, and subtle. It tracks without judging and informs without interrupting."
        }
      ]
    }
  },
  {
    id: "covid-in-pixels",
    title: "COVID in Pixels",
    subtitle: "News Analysis Visualization",
    description: "A project analyzing global news to show how COVID-19 shifted humanitarian reporting, using NLP to analyze news articles from various sources.",
    image: "/images/projects/covid.jpg",
    category: "Data Visualization",
    tags: ["NLP", "Data Viz", "Research"],
    year: "2020",
    featured: false,
    color: "#FF5722",
    details: {
      overview: "This project analyzes global news to show how COVID-19 shifted humanitarian reporting, using Natural Language Processing (NLP) to analyze humanitarian news articles from various sources.",
      role: "Designer & Developer",
      tools: ["Python", "Highcharts.js", "AmCharts", "NLP"],
      sections: [
        {
          title: "Visualization",
          content: "Interactive visualizations using Highcharts.js and AmCharts create a comprehensive timeline of news articles alongside dynamic line and bar graphs for exploring media discourse patterns."
        }
      ]
    }
  },
  {
    id: "midi-controller",
    title: "Custom MIDI Controller",
    subtitle: "Hardware Music Interface",
    description: "A custom MIDI controller built to integrate with Rekordbox, using Arduino programming and MIDI protocols for live DJ performance.",
    image: "/images/projects/midi.jpg",
    category: "Hardware",
    tags: ["Arduino", "Music", "DIY"],
    year: "2019",
    featured: false,
    color: "#607D8B",
    details: {
      overview: "A custom MIDI controller built to integrate with Rekordbox, using Arduino programming and MIDI protocols.",
      role: "Designer & Builder",
      tools: ["Arduino", "MIDI", "Rekordbox"],
      sections: [
        {
          title: "Build Process",
          content: "The controller was designed and built from scratch, combining hardware prototyping with software integration for seamless DJ performance."
        }
      ]
    }
  },
  {
    id: "expressive-lamp",
    title: "Expressive Lamp",
    subtitle: "Physical Distancing Design",
    description: "A non-invasive, subtle design using expressive lights to guide physical distancing in shared student spaces during COVID-19.",
    image: "/images/projects/lamp.jpg",
    category: "Research",
    tags: ["IoT", "Physical Computing", "COVID-19"],
    year: "2020",
    featured: false,
    color: "#795548",
    details: {
      overview: "A non-invasive, subtle design to guide physical distancing in shared student spaces using expressive lights to convey the message of physical distancing.",
      role: "Research & Design",
      tools: ["Arduino", "LED Programming", "User Research"],
      sections: [
        {
          title: "Design Philosophy",
          content: "The design was non-authoritative, non-invasive, and subtle. Rather than demanding compliance, it gently encouraged safer behavior through ambient feedback."
        }
      ]
    }
  }
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectById = (id: string) => projects.find(p => p.id === id);
export const getProjectsByCategory = (category: string) => projects.filter(p => p.category === category);

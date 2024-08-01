export const routes = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "About",
    path: "/about",
  },
];

type FooterCol = {
  title: string;
  links: {
    name: string;
    link: string;
    icon?: string;
    leavesWebsite: boolean;
  }[];
};

type Footer = {
  columns: FooterCol[];
  support: {
    buymeacoffee: string;
    paypal: string;
    message: string;
  };
};

export const footer: Footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false,
        },
        {
          name: "Projects",
          link: "/projects",
          leavesWebsite: false,
        },
        {
          name: "About",
          link: "/about",
          leavesWebsite: false,
        },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/yashraj970",
          icon: "/static/icons/github-f.svg",
          leavesWebsite: true,
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/yash-raj-a9037b242/",
          icon: "/static/icons/linkedin-f.svg",
          leavesWebsite: true,
        },
        {
          name: "Email",
          link: "mailto:itsyashraj970@gmail.com",
          icon: "/static/icons/mail-f.svg",
          leavesWebsite: true,
        },
      ],
    },
  ],
  support: {
    buymeacoffee: "braydenw",
    paypal: "braydentw",
    message: "I appreciate your support very much! 💙",
  },
};

// Projects
export interface content {
  image: string;
  detailTitle: string;
  detailDesc: string;
}
interface Project {
  title: string;
  src: string;
  description: string;
  liveLink: string;
  github: string;
  content: content[];
}
export const projects: Project[] = [
  {
    title: "YesMart Ecommerce WebApp",
    src: "/images/projects/YesMart_Ecommerce.png",
    description:
      "Comprehensive ecommerce platform featuring all the essential ecommerce features.",
    liveLink: "https://ecommerce-web-three-nu.vercel.app/",
    github: "https://github.com/yashraj970/YesMart-Ecommerce",
    content: [
      {
        image: "/images/projects/YesMart_Ecommerce.png",
        detailTitle:
          "The first rule of Apple club is that you boast about Apple club.",
        detailDesc:
          "Keep a journal, quickly jot down a grocery list, and take amazing class notes. Want to convert those notes to text? No problem. Langotiya jeetu ka mara hua yaar is ready to capture every thought.",
      },
    ],
  },
  {
    title: "Voice Calling AI System",
    src: "/images/projects/Voice_Calling.png",
    description:
      "AI-driven voice calling platform that leverages OpenAI and Twilio to integrate voice chat calling.",
    liveLink: "",
    github: "",
    content: [],
  },
  {
    title: "Fire Alarm Management System",
    src: "/images/projects/Fire_Alarm.png",
    description:
      "Fire alarm system with real-time monitoring and alerts, offering critical alarm details to ensure safety.",
    liveLink: "",
    github: "",
    content: [],
  },
];

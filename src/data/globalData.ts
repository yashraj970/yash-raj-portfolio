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
        image: "/images/projects/ProductPage.png",
        detailTitle: "Product Page: Shop the Latest Fashion and Accessories",
        detailDesc:
          "Explore our diverse collection of fashion items, featuring the latest trends and styles. Each product card displays an image, name, price, category, and offers quick access to detailed product information and an option to add the item to your cart. Happy shopping!",
      },
      {
        image: "/images/projects/CartPage.png",
        detailTitle: "Shopping Cart",
        detailDesc:
          "Review the items in your cart, adjust quantities, and proceed to checkout. Each product in the cart shows the name, image, price, category, and quantity controls for easy adjustments. Below the product list, you can select a delivery address and see the subtotal before proceeding to checkout.",
      },
      {
        image: "/images/projects/CheckoutPage.png",
        detailTitle: "Multi-Page Checkout",
        detailDesc:
          "Complete your purchase in a few easy steps. Start by providing your billing information, then review and select your shipping address, and finally, proceed to payment. Each step is clearly marked, guiding you through the process to ensure a smooth and secure transaction.",
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

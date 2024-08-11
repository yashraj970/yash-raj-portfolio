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
    content: [
      {
        image: "/images/projects/phonenumbers.png",
        detailTitle: "Phone Numbers Page: Manage Your Phone Numbers",
        detailDesc:
          "Import and manage your phone numbers from Twilio or Vonage. Easily add, edit, and delete phone numbers by providing the required credentials, including number, token, and SID. Keep your calling resources organized and accessible in one centralized location.",
      },
      {
        image: "/images/projects/contactlist.png",
        detailTitle: "Contact Lists: Upload and Organize Your Contact Lists",
        detailDesc:
          "Seamlessly upload and manage contact lists for your calling campaigns. Assign contacts to specific AI assistants, view, edit, and delete lists as needed. This page provides a streamlined process for organizing your calling targets to ensure efficient outreach.",
      },
      {
        image: "/images/projects/callLogs.png",
        detailTitle: "Call Logs: Access and Review Call Logs",
        detailDesc:
          "Listen to recordings and review the history of all calls made through the system. Search by date, view detailed transcripts, and keep track of your communication efforts with an intuitive, user-friendly interface designed for easy navigation and access.",
      },
    ],
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

//Footer
interface Footer {
  id: number;
  name: string;
  designation?: string;
  image: string;
  url: string;
}
export const footer: Footer[] = [
  {
    id: 1,
    name: "Portfolio",
    designation: "Yash Raj",
    image: "/images/footerIcons/portfolio.jpg",
    url: "https://yash-raj-portfolio.vercel.app/",
  },
  {
    id: 2,
    name: "Github",
    designation: "yashraj970",
    image: "/images/footerIcons/github.png",
    url: "https://github.com/yashraj970",
  },
  {
    id: 3,
    name: "LinkedIn",
    image: "/images/footerIcons/linekdin.jpeg",
    url: "https://www.linkedin.com/in/yash-raj-a9037b242/",
  },
  {
    id: 4,
    name: "Email",
    designation: "itsyashraj970@gmail.com",
    image: "/images/footerIcons/gmail.jpeg",
    url: "mailto:itsyashraj970@gmail.com",
  },
];

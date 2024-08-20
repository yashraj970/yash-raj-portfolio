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
export interface Project {
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
      "AI-driven voice calling platform that leverages OpenAI and Twilio to integrate voice chat calling functionalities, enabling seamless and intelligent communication experiences.",
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
        image: "/images/projects/call_log.png",
        detailTitle: "Call Logs: Access and Review Call Logs",
        detailDesc:
          "Listen to recordings and review the history of all calls made through the system. Search by date, view detailed transcripts, and keep track of your communication efforts with an intuitive, user-friendly interface designed for easy navigation and access.",
      },
    ],
  },
  {
    title: "Food Delivery WebApp",
    src: "/images/projects/FoodDelivery.png",
    description:
      "A food delivery application built using React.js and .NET, featuring real-time tracking of delivery partners via SignalR, seamless multi-step checkout, secure payments integrated with Razorpay API, and accurate location tracking with Google Maps API. This platform also includes a registration system for restaurants, enabling them to manage and showcase their menus efficiently.",
    liveLink: "",
    github: "",
    content: [
      {
        image: "",
        detailTitle: "Restaurant Page: See Nearby Restaurant",
        detailDesc:
          "This page allows users to explore nearby restaurants within a 10 km radius. Integrated with Google Maps API, the page provides accurate location tracking, making it easy for users to discover dining options close to them. Each restaurant listing includes essential details like menu offerings, ratings, and delivery time estimates.",
      },
      {
        image: "",
        detailTitle: "Cart Page: Review Your Order",
        detailDesc:
          "On this page, users can review the items they've added to their cart before proceeding to checkout. It offers an intuitive interface for adjusting quantities, removing items, and applying discount codes. Users can view the total cost and prepare for a seamless checkout process.",
      },
      {
        image: "",
        detailTitle: "Payment Page: Secure Your Order",
        detailDesc:
          "The payment page ensures a secure transaction process, integrated with Razorpay API. Users can select their preferred payment method, confirm their order details, and finalize the purchase with confidence. The page is designed to be user-friendly, offering a smooth and secure checkout experience.",
      },
      {
        image: "",
        detailTitle: "Real-Time Tracking: Follow Your Delivery",
        detailDesc:
          "After placing an order, users can track their delivery partner in real-time. The page utilizes SignalR for instant updates and Google Maps API for accurate tracking, providing users with the delivery partner's current location and estimated time of arrival.",
      },
      {
        image: "",
        detailTitle: "Restaurant Registration: Manage Your Menu",
        detailDesc:
          "This page is designed for restaurant owners to register their business on the platform. After registration, they can efficiently manage their menu listings, update meal offerings, and showcase their restaurant to a wider audience.",
      },
    ],
  },
  {
    title: "Leave Management System",
    src: "",
    description:
      "A fully functional leave management system designed to simplify leave requests for employees and enable efficient approval workflows for managers. The platform features real-time email notifications, restricted access for managers, a change password system with API integration using Axios, and a dynamic notification system with conditional CSS styles. Employees can apply for leaves, view their leave history, and track current requests, with validation checks on both client and server sides ensuring error-free submissions.",
    liveLink: "",
    github: "",
    content: [
      {
        image: "",
        detailTitle: "Employee Dashboard",
        detailDesc:
          "View your leave balance, recent requests, and current status. Navigate through the system to apply for new leaves or check your leave history.",
      },
      {
        image: "",
        detailTitle: "Leave Application: Apply for Leave",
        detailDesc:
          "Easily apply for leaves by selecting the type, duration, and adding any necessary comments. Track the status of your application and receive real-time updates.",
      },
      {
        image: "",
        detailTitle: "Leave Approval: Manager's Approval Page",
        detailDesc:
          "Manage all pending leave requests efficiently. Review, approve, or reject requests, and maintain organized records of all employee leaves.",
      },
      {
        image: "",
        detailTitle: "Notifications: Real-Time Email Notifications",
        detailDesc:
          "Stay informed with dynamic notifications indicating read and unread status. Receive instant updates on new leave requests and changes to your submissions.",
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

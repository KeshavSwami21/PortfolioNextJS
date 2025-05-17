import { link } from "fs";
import { ul } from "motion/react-client";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I love working with people who are just as curious and driven as I am",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zones",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Just a tech nerd who loves building stuff.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an RPG in Python using pygame",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Personal Protfolio - Using Next.js",
    des: "This portfolio website showcases my skills and projects, built with Next.js, Tailwind CSS, and Framer Motion for smooth animations.",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/KeshavSwami21/Keshav-s-Portfolio-NextJs",
  },
  {
    id: 2,
    title: "Form Filler – Fullstack Form Automation Platform",
    des: "Form Filler is a dynamic, fullstack web application that allows users to fill out document-based forms using live HTML previews, then securely download their personalized files after payment. It consists of a JavaScript-based frontend and a Django REST backend with Razorpay integration.",
    img: "/p2.png",
    iconLists: [
      "/form_filler/python.svg",
      "/form_filler/django.svg",
      "/form_filler/ajax.svg",
      "/form_filler/js.svg",
      "/form_filler/css.svg",
    ],
    link: "https://github.com/KeshavSwami21/Form-Filler-website",
  },
  {
    id: 3,
    title: "An AI-powered resume enhancement tool",
    des: "Smart CV is an AI-powered resume analysis tool that utilizes Natural Language Processing (NLP) and Machine Learning (ML). It extracts key skills, qualifications, and experiences from resumes, offers personalized recommendations, and matches resumes to job descriptions with high accuracy.",
    img: "/p3.jpg",
    iconLists: [
      "/form_filler/python.svg",
      "/form_filler/django.svg",
      "/form_filler/sql.svg",
      "/form_filler/js.svg",
      "/form_filler/css.svg",
    ],
    link: "https://github.com/KeshavSwami21/Smart-CV",
  },
  {
    id: 4,
    title: "Shiwi - Personal Assistant",
    des: "Shiwi is a Python-based personal assistant designed to help users manage tasks, set reminders, and interact with various plugins to enhance productivity.",
    img: "/p4.png",
    iconLists: [
      "/form_filler/python.svg",
      "/form_filler/django.svg",
      "/form_filler/json.svg",
      "/form_filler/ajax.svg",
      "/form_filler/js.svg",
    ],
    link: "https://github.com/KeshavSwami21/Shiwi/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Python Developer Intern",
    company: "Ominos Technologies International Pvt. Ltd.",
    date: "Aug 2023 - Jan 2024",
    desc1:
      "Developed and maintained web applications using Python (Django), enhancing backend functionalities and API integrations.",
    desc2:
      "Collaborated with the development team to optimize database queries and improve application performance.",
    className: "md:col-span-2",
    // thumbnail: "/exp1.svg",
  },
];

export const educationHistory = [
  {
    id: 1,
    title: "Python Developer Intern",
    company: "Ominos Technologies International Pvt. Ltd.",
    date: "Aug 2023 - Jan 2024",
    desc1:
      "Developed and maintained web applications using Python (Django), enhancing backend functionalities and API integrations.",
    desc2:
      "Collaborated with the development team to optimize database queries and improve application performance.",
    className: "md:col-span-2",
    // thumbnail: "/exp1.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/KeshavSwami21",
  },
  {
    id: 2,
    img: "/insta.svg",
    link:"https://www.instagram.com/_keshav_swami_/",
  },
  {
    id: 3,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/keshavswami21/",
  },
];

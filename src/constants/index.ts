import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  flutter,
  swift,
  nodejs,
  mongodb,
  git,
  figma,
  ease,
  jobit,
  youtube,
  lti,
  amdocs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Swift",
    icon: swift,
  },
  
];

const experiences: TExperience[] = [
  {
    title: "Senior Software Developer(Flutter & React JS)",
    companyName: "Amdocs",
    icon: amdocs,
    iconBg: "#E6DEDD",
    date: "June 2022 - Current",
    points: [
      "Developed a cutting-edge Mobile Application for an Autonomous Store for \"Etisalat-UAE\" using Flutter (MVVM) , revolutionizing the customer purchasing journey with a seamless and stress-free experience.",
      "Designed and developed reusable software components which used in 3 different projectwith reducing development effort by 50%",
      "Re-engineered critical modules within a sprint to rely on a centralized library to optimize performance by 68%.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer(React JS)",
    companyName: "LTIMindtree",
    icon: lti,
    iconBg: "#383E56",
    date: "October 2019 - May 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
  
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "EASE APP",
    description:
      "Flutter application module build for \"ETISALAT UAE\" for their Autonomous Store. This Flutter module is being integrated in Android and iOS native applications.",
    tags: [
      {
        name: "Dart",
        color: "blue-text-gradient",
      },
      {
        name: "Flutter",
        color: "green-text-gradient",
      },
      {
        name: "Android",
        color: "pink-text-gradient",
      },
      {
        name: "iOS",
        color: "blue-text-gradient",
      },
    ],
    image: ease,
    source: youtube,
    sourceCodeLink: "https://www.youtube.com/watch?v=7oZusYvRDdw",
  },
  {
    name: "Apollo Dashboard",
    description:
      "Web application that enables users to monitor projects health by an overview of current sprint with deatils like Tasks, Defects, Sprint Health & Backlog & Sonar.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Mui",
        color: "pink-text-gradient",
      },
    ],
    source:"",
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };

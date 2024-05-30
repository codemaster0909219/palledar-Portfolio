import {
    mobile,
    backend,
    creator,
    web,
    AI,
    keras,
    pytorch,
    tensorflow,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    summarizer,
    tiktok,
    lyriks,
    zombie,
    threejs,codechef,Portfolio,te,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "AI Developer",
      icon: AI,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "PyTorch",
      icon: pytorch,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Senior Engineer",
      company_name: "Ingram Micro",
      icon: "/ingram.png",
      iconBg: "rgb(230, 222, 221)",
      date: "May 2023 - Present",
      points: [
        " Led the development of a dynamic e-commerce platform incorporating AI-driven product recommendations, boosting user engagement and sales.",
        "Designed and implemented an intelligent chatbot using NLP to enhance customer support, reducing response times by 30%",
        "Developed and maintained web applications with a focus on scalability, security, and performance.",
        "Collaborated with cross-functional teams to integrate machine learning models into web solutions, providing real-time data insights.",
        "Managed cloud-based deployments, ensuring high availability and robustness of web applications.",
      ],
    },
    {
      title: "Senior Frontend Engineer",
      company_name: "Dapper Labs",
      icon: "/dapper.png",
      iconBg: "rgb(230, 222, 221)",
      date: "May 2022 - Apr 2023",
      points: [
        " Architect and implement robust frontend solutions using React, TypeScript, and Redux, optimizing for performance and scalability.",
        "Collaborate closely with product managers, designers, and backend engineers to deliver new features and enhancements.",
        "Mentor junior developers and conduct code reviews, fostering a culture of continuous improvement and high-quality code.",
        "Spearhead the integration of modern frontend best practices, including component-based architecture and automated testing frameworks.",
      ],
    },
    {
      title: "Senior Frontend Engineer",
      company_name: "Binance",
      icon: "/binance.png",
      iconBg: "rgb(56, 62, 86)",
      date: "Mar 2021 - Apr 2022",
      points: [
        " Established the implementation of automated data refresh processes, decreasing data staleness by 50% and enabling the team to react swiftly to market shifts, leading to a 25% increase in market share.",
        "Executed the deployment of unit and end-to-end tests for a robust codebase, which led to a 50% decrease in post-release.",
      ],
    },
      
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Rajesh Venugopal",
      designation: "Direct of Engineering",
      company: "Ingram Micro",
      image: "/CTOs/7.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "Project Manager",
      company: "Dapper Labs",
      image: "/CTOs/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Alexei Gura",
      designation: "CTO",
      company: "America's Frontline Doctors",
      image: "/CTOs/3.jpg",
    },
  ];
  

  const projects = [
    {
      name: "Tiktik",
      description:
        "Our TikTok Clone Application includes Google Auth, the ability to upload, publish, share, comment on, and like the videos; filtering by categories and advanced search functionalities, profile pages, suggested accounts, custom responsive design, and much more.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Sanity",
          color: "green-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "pink-text-gradient",
        },
      ],
      image: tiktok,
      site_link: "https://tiktok-mimic.vercel.app",
      source_code_link: "https://github.com/Sankalpd19/3dPortfolio",
    },
    {
      name: "Lyriks",
      description:
        "Master modern web development by building an improved version of Spotify. With a modern homepage, fully-fledged music player, search, lyrics, song exploration features, search, popular music around you, worldwide top charts, and much more",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "RapidAPI",
          color: "green-text-gradient",
        },
        {
          name: "SCSS",
          color: "pink-text-gradient",
        },
      ],
      image: lyriks,
      site_link: "https://lyriks-mimic.netlify.app",
      source_code_link: "https://sankalpd19.github.io/TechEscapade2021/",
    },
    {
      name: "Summarizer",
      description:
        "Simplify your reading with Summize, an open-source article summarizer that transforms length articles into clear and concise sumaries",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "ChatGPT",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: summarizer,
      site_link: "https://ai-summarizer-zeta.vercel.app",
      source_code_link: "https://sankalpd19.itch.io/zombie-mania",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
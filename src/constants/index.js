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
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    zombie,
    threejs,codechef,Portfolio,te,
  } from "../assets";
  
  export const navLinks = [
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
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
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
      title: "UI Designer",
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
      title: "Event Head",
      company_name: "•Tech Marathon-Annual Event of Dduc",
      icon: "https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/64109e5f8efbf_Deen_Dayal_Upadhyaya_Colleges_official_logo.jpeg?d=110x110",
      iconBg: "#383E56",
      date: "Feb 2021 - Mar 2021",
      points: [
        " Successfully conducted an online treasure hunt event for Deen Dayal Upadhyaya college’s Annual Tech Fest.",
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams and other developers to create the events website.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        
      ],
    },
    {
      title: "Social Media Lead",
      company_name: "Dduc’s CodeChef Chapter",
      icon: codechef,
      iconBg: "#383E56",
      date: "Mar 2020 - Mar 2021",
      points: [
        " Worked as the social media and graphics lead for my college’s CodeChef chapter responsible for making posters,advertisement of various competitive programming events organized.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
      
  ];
  
  const testimonials = [
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
  

  const projects = [
    {
      name: "Portfolio Website 3D",
      description:
        "Web based portfolio to display details about me and my projects.It has advanced 3d graphics as well as animations developed using Three js and framer-motion",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: Portfolio,
      source_code_link: "https://github.com/Sankalpd19/3dPortfolio",
    },
    {
      name: "Tech Escapade",
      description:
        "Tech Escapade is a online treasure hunt website which provides an entry point into the technical adventure.It is an interactive game website developed using React Js and various libraries like GSAP for animation providing a login page for the participants and presenting the details , first level of the game.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "GSAP",
          color: "green-text-gradient",
        },
        {
          name: "figma",
          color: "pink-text-gradient",
        },
      ],
      image: te,
      source_code_link: "https://sankalpd19.github.io/TechEscapade2021/",
    },
    {
      name: "Zombie Mania",
      description:
        "A 2D endless runner game using Unity and Csharp featuring a post apocalyptic setting. It includes beautifully designed characters and levels made in photoshop and Figma.",
      tags: [
        {
          name: "unity",
          color: "blue-text-gradient",
        },
        {
          name: "c-sharp",
          color: "green-text-gradient",
        },
        {
          name: "figma",
          color: "pink-text-gradient",
        },
      ],
      image: zombie,
      source_code_link: "https://sankalpd19.itch.io/zombie-mania",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
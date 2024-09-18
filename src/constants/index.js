import {
    mobile,
    backend,
    creator,
    web,
    AI,
    BC,
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
    meta1Exchange,
    Meta1Litewallet,
    Meta1CoinTrust,
    Meta1Explorer,
    ECOSwap,
    AurixExchange,
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
      title: "BlockChain Developer",
      icon: BC,
    },
    {
      title: "AI Developer",
      icon: AI,
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
      name: "Blockchain",
      icon: BC,
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
  ];
  
  const experiences = [
    {
      title: "Lead Developer",
      company_name: "Meta1 Coin Trust",
      icon: "/meta1.jpg",
      iconBg: "rgb(255, 255, 255)",
      date: "Feb 2021 - Present",
      points: [
        "	As Lead Developer for Meta-Exchange, I built both the backend with Solidity and Node.js and the frontend with React for a secure, dynamic decentralized trading platform with real-time features.",
        "I led the development of Meta1 Explorer, a blockchain explorer with a Node.js and Python backend for data processing and SQL integration, and a React frontend for user-friendly access to transaction history, block details, and smart contract interactions, addressing performance challenges and ensuring real-time data accuracy.",
        "I developed Meta1 Litewallet, a lightweight cryptocurrency wallet, handling both backend and frontend tasks; using Node.js and Solidity for secure transaction processing and smart contract interactions, SQLite for local storage, and React for an intuitive interface, with a strong focus on security features like encryption and multi-signature support.",
        "I developed Meta1 Coin as part of the Meta1 ecosystem, handling smart contract development with Solidity for token management, integrating with the platform using Node.js, and creating a React frontend for managing coins, viewing transactions, and interacting with the token, with a focus on security and performance."
      ],
    },
    {
      title: "Full Stack & Smart Contracts Developer",
      company_name: "Ment Tech",
      icon: "/menttech.jpg",
      iconBg: "rgb(255, 255, 255)",
      date: "Aug 2019 - Apr 2021",
      points: [
        "	ECO Swap is a decentralized exchange (DEX) platform designed for token trading and liquidity management. As a Full Stack Developer, I developed both frontend and backend components. On the backend, I used Node.js and Solidity to build and deploy smart contracts for managing trades and liquidity pools. On the frontend, I utilized React to create a user-friendly interface for executing trades and interacting with the platform. The project involved integrating blockchain functionalities and ensuring the platform could handle high transaction volumes securely and efficiently.",
        "World Crypto Exchange is a blockchain-based platform for managing and trading cryptocurrencies. In this role, I worked on developing the core features of the platform, including smart contract implementation and integration. I used React for the frontend to provide a seamless trading experience and Node.js with MongoDB on the backend to handle user data and transaction processing. My contributions ensured a secure and user-friendly interface for cryptocurrency trading, meeting the needs of both novice and experienced traders.",
      ],
    },
    {
      title: "Senior Fullstack Developer",
      company_name: "colle.ge",
      icon: "/college.png",
      iconBg: "rgb(255, 255, 255)",
      date: "May 2018 - May 2019",
      points: [
        " As a Fullstack Developer at colle.ge, I played a critical role in the development and maintenance of an educational platform designed to enhance the learning experience for students and educators. The platform was built using AngularJS for the frontend, .NET for backend services, and MSSQL for database management. My responsibilities included architecting the system, implementing key features, and ensuring the platform's overall performance, scalability, and security.",
      ],
    },
    {
      title: "Senior Frontend Developer",
      company_name: "SpillAgency",
      icon: "/spillagency.png",
      iconBg: "rgb(0, 0, 0)",
      date: "Jan 2018 - Mar 2018",
      points: [
        " At SpillAgency, I worked as a Front-End Developer focusing on building and enhancing an e-commerce platform and ordering system. My primary role involved using Gatsby and GraphQL to develop a fast, scalable, and SEO-friendly front end for the platform. I played a key role in creating a seamless and interactive user experience, ensuring that the platform was both visually appealing and highly functional.",
      ],
    },
    {
      title: "Senior Frontend Developer",
      company_name: "Resmio",
      icon: "/resmio.png",
      iconBg: "rgb(255, 255, 255)",
      date: "May 2017 - Dec 2017",
      points: [
        " At Resmio, I worked as a Frontend Developer on a comprehensive platform designed to manage restaurant reservations and customer interactions. The platform aimed to streamline the booking process for both customers and restaurant staff, offering features that improved operational efficiency and enhanced the dining experience.",
      ],
    },
    {
      title: "Junior Full Stack Developer",
      company_name: "Arbox",
      icon: "/arbox.png",
      iconBg: "rgb(0, 210, 130)",
      date: "Sep 2016 - Feb 2017",
      points: [
        " At Arbox, I served as a Full Stack Developer, contributing to the development of a business management platform aimed at fitness centers and gyms. The platform was designed to help businesses manage various aspects of their operations, including scheduling, billing, customer management, and communication.",
      ],
    },
    {
      title: "Junior Mobile Developer",
      company_name: "PinTalk",
      icon: "/pintalk.png",
      iconBg: "rgb(0, 0, 0)",
      date: "Jun 2016 - Jan 2017",
      points: [
        " At PinTalk, I worked as an iOS and Android Developer, focusing on developing a real-time messaging and location-based service application. The app was designed to facilitate communication between users while providing location-based features that enhanced the overall user experience.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Mattermost",
      icon: "/mattermost.png",
      iconBg: "rgb(255, 255, 255)",
      date: "Apr 2016 - Jun 2016",
      points: [
        " As a Software Engineer on the Mattermost Internal Tool project, I was responsible for developing and maintaining a tool designed to streamline internal collaboration and management processes within the organization. The tool was built to improve communication, task management, and workflow automation for Mattermost’s internal teams",
      ],
    },
      
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Palle proved me wrong.",
      name: "Robert Dunlap",
      designation: "CEO",
      company: "Meta1 Coin Trust",
      image: "/CTOs/robert.jpg",
    },
    {
      testimonial:
        "I've never met a developer who truly cares about their clients' success like Palle does.",
      name: "Ujjwal Sahay",
      designation: "CEO & MD",
      company: "Ment Tech",
      image: "/CTOs/ujjwal.jpg",
    },
    {
      testimonial:
        "After Palle optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Rodrigo Lara",
      designation: "COO",
      company: "weLove.education",
      image: "/CTOs/rodrigo.jpg",
    },
  ];
  

  const projects = [
    {
      name: "Meta1 Exchange",
      description:
        "Meta-Exchange is a decentralized exchange (DEX) platform that facilitates cryptocurrency trading without the need for a central authority or intermediary. Built on blockchain technology, it leverages smart contracts to execute trades and manage liquidity automatically, providing users with security, transparency, and control over their assets.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Node",
          color: "green-text-gradient",
        },
        {
          name: "Websocket",
          color: "pink-text-gradient",
        },
        {
          name: "ElasticSearch",
          color: "orange-text-gradient",
        },
      ],
      image: meta1Exchange,
      site_link: "https://meta-exchange.vision/market/META1_USDT",
      source_code_link: "#about",
    },
    {
      name: "Meta1 Litewallet",
      description:
        "Meta1 Litewallet is a lightweight cryptocurrency wallet that provides users with a secure, user-friendly interface for managing their digital assets, specifically the Meta1 Coin and other cryptocurrencies within the Meta1 ecosystem. It is designed to be easily accessible and efficient way to send, receive, and store crypto assets.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Web3",
          color: "green-text-gradient",
        },
        {
          name: "Biometric",
          color: "pink-text-gradient",
        },
      ],
      image: Meta1Litewallet,
      site_link: "https://wallet.meta1coin.vision",
      source_code_link: "",
    },
    {
      name: "Meta1 Coin Trust",
      description:
        "Meta1 Coin Trust is the official platform for the Meta1 project, which focuses on a decentralized cryptocurrency ecosystem aimed at promoting financial freedom, asset-backed tokens, and a secure way to store and transfer value. The platform showcases Meta1 Coin’s mission, vision, and technical aspects",
      tags: [
        {
          name: ".NET",
          color: "blue-text-gradient",
        },
        {
          name: "ChatGPT",
          color: "green-text-gradient",
        },
        {
          name: "Finance",
          color: "pink-text-gradient",
        },
        {
          name: "SAAS",
          color: "orange-text-gradient",
        },
      ],
      image: Meta1CoinTrust,
      site_link: "https://meta1coin.vision/",
      source_code_link: "",
    },
    {
      name: "Meta1 Explorer",
      description:
        "Meta1 Explorer is a blockchain explorer tool that allows users to view and analyze transaction data, block information, and smart contract interactions on the Meta1 blockchain. It provides a user-friendly interface for tracking blockchain activity, enabling users to explore the details of their transactions, monitor the status of the Meta1 blockchain, and gain transparency into the decentralized network.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "ElasticSearch",
          color: "green-text-gradient",
        },
        {
          name: "Web3",
          color: "pink-text-gradient",
        },
        {
          name: "Python",
          color: "orange-text-gradient",
        },
      ],
      image: Meta1Explorer,
      site_link: "https://explorer.meta1coin.vision/",
      source_code_link: "",
    },
    {
      name: "ECO Swap",
      description:
        "ECO Swap is a DEX platform that enables users to swap cryptocurrencies directly, without the need for intermediaries or centralized authorities. It provides a secure, efficient, and transparent environment for trading tokens in a DeFi ecosystem. Built using smart contracts, ECO Swap automates the process of token exchanges through liquidity pools and AMM, ensuring that trades are executed quickly and efficiently.",
      tags: [
        {
          name: "Nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "Web3",
          color: "green-text-gradient",
        },
        {
          name: "Smart Contracts",
          color: "pink-text-gradient",
        },
      ],
      image: ECOSwap,
      site_link: "https://ecoswap-dev.netlify.app/",
      source_code_link: "",
    },
    {
      name: "Aurix Exchange",
      description:
        "Aurix Exchange is a cryptocurrency trading platform that offers a seamless, secure, and efficient way for users to buy, sell, and trade digital assets. Built with an emphasis on security and user experience, Aurix Exchange allows users to trade a wide variety of cryptocurrencies while benefiting from cutting-edge technology such as blockchain integration, advanced trading tools, and DeFi functionalities.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Web3",
          color: "green-text-gradient",
        },
        {
          name: "Mongodb",
          color: "pink-text-gradient",
        },
        {
          name: "StoryBoard",
          color: "orange-text-gradient",
        },
      ],
      image: AurixExchange,
      site_link: "https://www.aurix.exchange/",
      source_code_link: "",
    },    
  ];
  
  export { services, technologies, experiences, testimonials, projects };
import {
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    vuejs,
    fulltrac,
    todo,
    counterapp,
    weatherapp,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "project",
      title: "Project",
    },
    {
      id: "contact",
      title: "Contact",
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Vue JS",
      icon: vuejs,
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
      name: "git",
      icon: git,
    },
    
  ];
  
  
  const projects = [
    {
      name: "Landing Page",
      description:
        " A web-based landing page for a car tracking site designed to showcase the benefits of the service and encourage users to sign up for vehicle tracking and monitoring..",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "es6",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: fulltrac,
      source_code_link: "https://github.com/SandraIsola/Landing-Page",
      deployed_code_link:'https://landing-page-bice-delta.vercel.app/'
    },
    {
      name: "Todo App",
      description:
      "A web-based app that enables users to create and manage tasks. It provides a user-friendly interface to add, edit, and delete tasks, and organize tasks into different categories or projects.",
      tags: [
        {
          name: "vue",
          color: "blue-text-gradient",
        },
        {
          name: "es6",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: todo,
      source_code_link: "https://github.com/SandraIsola/Todo-App",
      deployed_code_link: "https://todo-xen-app.netlify.app/",

    },
    {
      name: "Weather App",
      description:
        " A web-based weather app that provides users about weather conditions in a specific region by imputing their location. It uses APIs to gather data and displays the information in a user-friendly format.",
      tags: [
        {
          name: "vue",
          color: "blue-text-gradient",
        },
        {
          name: "api",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: weatherapp,
      source_code_link: "https://github.com/SandraIsola/weather-app",
      deployed_code_link: "https://weather-app-psi-umber.vercel.app/",
    },
    {
      name: "Counter App",
      description:
        "A counter application built with a react custom hook with the increment, decrement, reset and setValue functions, also implemented a combination of states with a useReducer that correcsponds with the same four features.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "es6",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: counterapp,
      source_code_link: "https://github.com/SandraIsola/Counter-Project",
      deployed_code_link: " https://counterproject1234.netlify.app/Counter",
    },
  ];
  
  export { technologies, projects };
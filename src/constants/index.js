import {
    vision,
    web,
    machine,
    modeling,
    data,
    ubc,
    BCCDC,
    moodtracker,
    upassloader,
    personalwebsite,
    resturantwebsite,
    github,
    linkedin,
    email,
  } from '../assets/assets';
  
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
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const interests = [
    {
      title: "Web Development",
      icon: web,
    },
    {
      title: "Data Science",
      icon: data,
    },
    {
      title: "Machine Learning",
      icon: machine,
    },
    {
      title: "Computer Vision",
      icon: vision,
    },
    {
      title: "3D Modeling",
      icon: modeling,
    }
  ];
  
  const experiences = [
    {
      title: "Undergraduate Teaching Assistant",
      company_name: "The University of British Columbia",
      icon: ubc,
      iconBg: "#383E56",
      date: "Jan 2024 - April 2024",
      points: [
        // "Assisted professor in running tutorial sessions for MATH 101 - Integral Calculus.",
        // "Mentored two sections of 80+ students, grades and provide feedback on assignments.",
        // "Actively communicated with course team to ensure consistency in feedback given to students.",
        // "Participated in the modifying and perfecting of rubrics/class materials",
      ],
    },
    {
      title: "Data Science Research Assistant",
      company_name: "BC Centre for Disease Control",
      icon: BCCDC,
      iconBg: "#383E56",
      date: "Sept 2024 - April 2025",
      points: [
        // "Assisted professor in running tutorial sessions for MATH 101 - Integral Calculus.",
        // "Mentored two sections of 80+ students, grades and provide feedback on assignments.",
        // "Actively communicated with course team to ensure consistency in feedback given to students.",
        // "Participated in the modifying and perfecting of rubrics/class materials",
      ],
    }
  ];

  
  const projects = [
    {
      name: "Mood in Pixels",
      description:
        "A mood tracker application for users to log their emotions over customizable dates. Provides effective, easy to use visualization and summary tools of mood data for those wanting to moniter their emotions for better lifestyle and mental wellbeing.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "java swing",
          color: "green-text-gradient",
        },
        {
          name: "junit",
          color: "pink-text-gradient",
        },
      ],
      image: moodtracker,
      source_code_link: "https://github.com/racheyz/Mood-Tracker",
    },
    {
      name: "Transit Pass Autoloader",
      description:
        "An automation script that loads my monthly transit pass for school",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "selenium",
          color: "green-text-gradient",
        },
        {
          name: "winsdk",
          color: "pink-text-gradient",
        },
      ],
      image: upassloader,
      source_code_link: "https://github.com/racheyz/UPass-Autoloader",
    },
    {
      name: "Personal Website",
      description:
        "A personal portfolio to showcase everything about me! Created 3D models in blender to add interactive features to the website",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind css",
          color: "pink-text-gradient",
        },
        {
          name: "blender",
          color: "orange-text-gradient",
        },
      ],
      image: personalwebsite,
      source_code_link: "https://racheyz.github.io/",
    },
    // {
    //   name: "Resturant Website",
    //   description: "A website for the fictional resturant in the film \"Ratatouille \".",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "javascript",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: resturantwebsite,
    //   source_code_link: "https://github.com/racheyz/Ratatouille-Resturant-Wesbite",
    // }
  ];

  const contact_links = [
    {
      image: email,
      name: 'Email',
      link: 'rachelzhao0518@gmail.com',
    },
    {
      image: linkedin,
      name: 'LinkedIn',
      link: 'www.linkedin.com/in/rachel-zhao-930161224'
    },
    {
      image: github,
      name: 'GitHub',
      link: 'github.com/racheyz'
    }
  ]
  
  export { interests, experiences, projects, contact_links };
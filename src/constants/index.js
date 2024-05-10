import {
    vision,
    web,
    machine,
    modeling,
    ubc,
    carrent,
    jobit,
    tripguide,
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
        "Assisted professor in running tutorial sessions for MATH 101 - Integral Calculus.",
        "Mentored two sections of 80+ students, grades and provide feedback on assignments.",
        "Actively communicated with course team to ensure consistency in feedback given to students.",
        "Participated in the modifying and perfecting of rubrics/class materials",
      ],
    }
  ];

  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
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
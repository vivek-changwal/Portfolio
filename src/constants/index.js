import {
    mobile,
    backend,
    creator,
    postman,
    web,
    desert,
    alvrio,
    matrimonial,
    allproject,
    petstore,
    javascript,
    bootstrap,
    postgres,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    college,

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
      title: "ReactJs Developer",
      icon: mobile,
    },
    {
        title: "NodeJs Developer",
        icon: backend,
      },
    {
        title: "Github",
        icon: web,
    },
  
    {
      title: "PostManApi",
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
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
      name: "PostmanApi",
      icon: postman,
    },
    {
      name: "Postgesql",
      icon: postgres,
    },
 
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "",
      icon: reactjs,
      iconBg: "#383E56",
      date: "June 2022 -  August 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Node.js Developer",
      company_name: "",
      icon: nodejs,
      iconBg: "#E6DEDD",
      date: "June 2022 - Present",
      points: [
        "Proficient in Node.js development and asynchronous programming.",
        "Experience with Express.js for building efficient and scalable server-side applications.",
        "Knowledge of RESTful API design and integration.",
        "Experience with database technologies like MySQL, or PostgreSQL.",
        "Familiarity with front-end technologies that work well with Node.js backends."
      ],
    },
    {
      title: "Github, Gitlab, PostManApi",
      company_name: "",
      icon: git,
      iconBg: "#383E56",
      date: "June 2022 - Present",
      points: [
        "Proficient in using version control systems like Git and platforms like GitHub and GitLab.",
        "Experience in creating repositories, managing branches, and handling pull requests.",
        "Proficient in using Postman for testing and documenting APIs.",
        "Experience with designing API requests, managing collections, and working with environments.",
      ],
    },
    {
      title: "Html,CSS,Javascript",
      company_name: "Meta",
      icon: html,
      iconBg: "#E6DEDD",
      date: "June 2022 - Present",
      points: [
        "Proficient in front-end technologies including HTML, CSS, and JavaScript.",
        "Experience in building responsive and user-friendly web interfaces.",
        "Knowledge of modern HTML5 and CSS3 techniques.",
        "Familiarity with cross-browser compatibility and mobile-first design.",
      ],
    },
    {
        title: " BootStrap, Tailwind CSS, MaterialUi ",
        company_name: "",
        icon: tailwind,
        iconBg: "#E6DEDD",
        date: "June 2022 - Present",
        points: [
          "Proficient in using front-end libraries and frameworks such as BootStrap, Tailwind CSS, and Material UI.",
          "Experience in creating responsive and visually appealing user interfaces using these technologies.",
          "Familiarity with customizing and extending the styles and components provided by the libraries.",
          "Knowledge of how to integrate these libraries/frameworks into web projects effectively.",
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
      name: "Gurukul Pharmacy",
      description:
        " Highlight the college's commitment to providing a rigorous academic curriculum in the field of pharmacy. Mention any affiliations with recognized pharmacy boards.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
      ],
      image: college,
      source_code_link: "https://gurukulpharma.com/",
    },
    {
      name: "Alvrio.io",
      description:
         "A global technology consultancy that integrates strategy, design and engineering to drive digital innovation software development company .",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindCss",
          color: "green-text-gradient",
        },
      ],
      image: alvrio,
      source_code_link: "https://alvrio.io/",
    },
    {
      name: "Hotel Camp",
      description:
        "A comprehensive travel booking platform that allows users to book hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: desert,
      source_code_link: "https://hotel-camp-website.vercel.app/",
    },
    {
        name: "Pet-Store",
        description:
          "This is a Pet-Store app for pet animals lover they can buy pet food from this app  and this is one that I have created using Sequelize ORM and Node.js. The image showcases the dashboard section that I developed using Material-UI and ReactJs.",
        tags: [
          {
            name: "Nodejs",
            color: "blue-text-gradient",
          },
          {
            name: "SequilizeORM",
            color: "green-text-gradient",
          },
          {
            name: "Reactjs",
            color: "pink-text-gradient",
          },
          {
            name: "MaterialUi",
            color: "orange-text-gradient",
          },
        ],
        image: petstore,
        source_code_link: "https://github.com/vivek-changwal/Pet-store",
      },
      {
        name: "Matrimonial",
        description:
          "Develop a robust search mechanism that lets users filter potential partners based on criteria like age, education, religion, occupation, and location.Implement an algorithm to suggest compatible matches based on user preferences.",
        tags: [
            {
                name: "Nodejs",
                color: "blue-text-gradient",
              },
              {
                name: "SequilizeORM",
                color: "green-text-gradient",
              },
              {
                name: "Reactjs",
                color: "pink-text-gradient",
              },
              {
                name: "MaterialUi",
                color: "orange-text-gradient",
              },
        ],
        image: matrimonial,
        source_code_link: "https://github.com/Alvrio-Labs/matrimonial/tree/development",
      },
      {
        name: "Github Repository",
        description:
          "Clicking on the GitHub link will allow you to see all of my repositories and the work I have completed during my full stack development course. You can also explore my projects in various languages such as HTML, CSS, JavaScript, React, Node, etc.",
        tags: [
          {
            name: "react",
            color: "blue-text-gradient",
          },
          {
            name: "bootstrap",
            color: "green-text-gradient",
          },
          {
            name: "html",
            color: "pink-text-gradient",
          },
          {
            name: "css",
            color: "blue-text-gradient",
          },
          {
            name: "javascript",
            color: "orange-text-gradient",
          },
          {
            name: "postgresql etc.",
            color: "green-text-gradient",
          },
        ],
        image: allproject,
        source_code_link: "https://github.com/vivek-changwal",
      },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
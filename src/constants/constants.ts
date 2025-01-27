import {
    html,
    css,
    sass,
    tailwind,
    js,
    react,
    hoobank,
    place_for_family,
    best_shop,
    to_do,
    GPT3,
    Gericht,
    next,
    ts,
    cypress, storybook,
} from '../../public'

export const socialMedia = [
    {
        id: "social-media-1",
        name: "github",
        link: "https://github.com/pawelGrzesiewicz",
    },
    {
        id: "social-media-2",
        name: "linkedin",
        link: "https://www.linkedin.com/in/pawe%C5%82-grzesiewicz-11101a96/",
    },
    {
        id: "social-media-3",
        name: "codewars",
        link: "https://www.codewars.com/users/pawelGrzesiewicz",
    },
];

export const technologyStack = [
    {
        id: "technology-stack-1",
        icon: "/html.svg",
        name: "html"
    },
    {
        id: "technology-stack-2",
        icon: "/css.svg",
        name: "css"
    },
    {
        id: "technology-stack-3",
        icon: "/sass.svg",
        name: "sass"
    },
    {
        id: "technology-stack-4",
        icon: "/tailwind.svg",
        name: "tailwindCSS"
    },
    {
        id: "technology-stack-5",
        icon: "/js.svg",
        name: "javascript"
    },
    {
        id: "technology-stack-6",
        icon: "/ts.svg",
        name: "typescript"
    },
    {
        id: "technology-stack-7",
        icon: "/react.svg",
        name: "react.js"
    },
    {
        id: "technology-stack-8",
        icon: "/next.svg",
        name: "next.js"
    },
    {
        id: "technology-stack-9",
        icon: "/cypress.svg",
        name: "cypres.js"
    },
    {
        id: "technology-stack-10",
        icon: "/storybook.svg",
        name: "storybook"
    },
];

export const projects = [
    {
        id: "project-1",
        name: "Place for family",
        img: place_for_family,
        webLink: "https://placeforfamily.netlify.app",
        githubLink: "https://github.com/pawelGrzesiewicz/Place_for_family",
        stack:[sass, js, react],
        description: `The Entertainment Finder is a dynamic web application built with React, 
        offering users a personalized and interactive experience based on their family's preferences and local weather conditions. 
        The application provides a seamless navigation experience using React Router, allowing users to explore different views such as Home, 
        Sign Up, Sign In, Search Engine, and Add Option. The core functionality revolves around dynamically fetching and displaying entertainment 
        options categorized into "Active," "Learn," and "Chill.`
    },
    {
        id: "project-2",
        name: "Hoo Bank",
        img: hoobank,
        webLink: "https://modernbankappstyles.netlify.app/",
        githubLink: "https://github.com/pawelGrzesiewicz/bank_modern_app",
        stack:[tailwind, js, react],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A illo in obcaecati perferendis sed. ' +
            'Accusantium excepturi repudiandae ut. Similique, totam.'
    },
    {
        id: "project-3",
        name: "Best Shop",
        img: best_shop,
        webLink: "https://best-shop-rwd.netlify.app//",
        githubLink: "https://github.com/pawelGrzesiewicz/Best_Shop_RWD",
        stack:[sass, js],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A illo in obcaecati perferendis sed. ' +
            'Accusantium excepturi repudiandae ut. Similique, totam.'

    },
    {
        id: "project-4",
        name: "To Do",
        img: to_do,
        webLink: "https://to-dos-mvc.netlify.app",
        githubLink: "https://github.com/pawelGrzesiewicz/todo_mvc",
        stack:[sass, js, react],
        description: 'The project is a React-based to-do list application that allows users to efficiently manage their tasks. ' +
            'With features like adding new tasks, toggling between "in progress" and "done" statuses, and filtering tasks based on their status, ' +
            'the application provides a user-friendly interface for organizing to-do items. The use of local storage ensures persistent data storage, ' +
            'and the clean component structure, adhering to React best practices, enhances maintainability. Additionally, ' +
            'the application offers a visually appealing design with SCSS styling and utilizes PropTypes for robust type-checking throughout the codebase.',
    },
    {
        id: "project-5",
        name: "GPT 3",
        img: GPT3,
        webLink: "https://modern-gpt-design.netlify.app/",
        githubLink: "https://github.com/pawelGrzesiewicz/GPT-3",
        stack:[css, js, react],
        description: '',
    },
    {
        id: "project-6",
        name: "Gericht restaurant",
        img: Gericht,
        webLink: "https://restaurant-ger.netlify.app/",
        githubLink: "https://github.com/pawelGrzesiewicz/Gerich_restaurant",
        stack:[css, js, react],
        description: '',
    },
];
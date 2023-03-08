import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    vector,
    volobot, firebase, gith, chatApp, movie, blog, ecommerce
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
        title: "React.Js Developer",
        icon: mobile,
    },
    {
        title: "Frontend Developer",
        icon: backend,
    },
    {
        title: "Manual Tester",
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
        name: "firebase",
        icon: firebase,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "github",
        icon: gith,
    },
];

const experiences = [
    {
        title: "Web Developer",
        company_name: "Volobot Advanced Systems",
        icon: volobot,
        iconBg: "#383E56",
        date: "Jul 2022 - Oct 2022",
        points: [
            "Experienced in developing responsive and user-friendly web applications using HTML, CSS, and JavaScript.",
            "Passionate about learning and staying up-to-date with the latest web development trends and best practices.",
            "Experienced in developing responsive and user-friendly web applications using HTML, CSS, and JavaScript.",
            "Skilled in creating and consuming RESTful APIs using Node.js and Express.js for server-side development.",
        ],
    },
    {
        title: "React.js Developer",
        company_name: "Volobot Advanced Systems",
        icon: volobot,
        iconBg: "#383E56",
        date: "Dec 2022 - Mar 2023",
        points: [
            "Proficient in creating interactive, reusable, and responsive user interfaces using React.js library.",
            "Familiar with React Router for client-side routing and navigation in single-page applications.",
            "Familiar with popular UI libraries like Material UI and Semantic UI for building visually appealing and user-friendly interfaces.",
            "Comfortable working in a collaborative environment and utilizing version control systems like Git.",
        ],
    },

    {
        title: "Manual Tester",
        company_name: "Freelancer",
        icon: vector,
        iconBg: "#E6DEDD",
        date: "Dec 2022 - Mar 2023",
        points: [
            "Experienced in testing web and mobile applications for functionality, usability, and user experience.",
            "Experienced in working with developers to reproduce and debug defects.",
            "Familiar with manual exploratory testing techniques and able to identify defects and report them in a clear and concise manner.",
        ],
    },

    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
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
        name: "Chat App",
        description:
            "The app allows users to sign up, log in, and log out of the chat app using Firebase authentication services. This ensures that only authorized users can access the app and chat with each other."
        ,
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "orange-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: chatApp,
        source_code_link: "https://github.com/Gurjantrandahwa/chat_app",
        live_link:"https://chat-app-6b27c.web.app/"
    },
    {
        name: "Netflix Clone",
        description:
            "The Netflix clone utilizes APIs to fetch data such as movie titles, descriptions, and images from external sources. It also incorporates features such as rating, recommendations, and categories to enhance the user experience.",
        tags: [
            {
                name: "react.js",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "orange-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: "https://portfolio-9c109.web.app/static/media/img_6.9210e801efe53eb8f0a6.png",
        source_code_link: "https://github.com/Gurjantrandahwa/NetflixClone",
        live_link:"https://netflix-clone-4e2cc.web.app/"
    },
    {
        name: "Travel Advisor",
        description:
            "The website is designed using React.js components that provide a modular and reusable approach to building the user interface." +
            "The website also includes a gallery destinations to provide users with an immersive visual experience.",
        tags: [
            {
                name: "react.js",
                color: "blue-text-gradient",
            },
            {
                name: "jsx",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: "https://media.licdn.com/dms/image/C4D22AQF_2eG3cDAFfg/feedshare-shrink_2048_1536/0/1675166001783?e=1680739200&v=beta&t=USY_Tvt0mbKTP2ZWSPKgXtRdzx1-TnL2IxkGUjwTpxk",
        source_code_link: "https://github.com/Gurjantrandahwa/travel_advisor",
        live_link:"https://travel-advisor-a53bd.web.app/"
    },
    {
        name: "Blog App",
        description:
            "Blog app that's built with React.js likely consists of multiple components that work together to create a seamless user experience. These components could include a header component, a blog post component, a search bar component, and a filter component.",
        tags: [
            {
                name: "react.js",
                color: "blue-text-gradient",
            },
            {
                name: "jsx",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: blog,
        source_code_link: "https://github.com/Gurjantrandahwa/blog-app",
        live_link:"https://blog-app-f22d2.web.app/"
    },
    {
        name: "Box Office App",
        description:
            "Box-Office app is a movie search app that allows users to search for movies, view details about them, and see their ratings and reviews. The app is built using React.js, a popular JavaScript library for building user interfaces, and an API that provides movie data.",
        tags: [
            {
                name: "react.js",
                color: "blue-text-gradient",
            },
            {
                name: "api",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: movie,
        source_code_link: "https://github.com/Gurjantrandahwa/movies_search_app",
    },
    {
        name: "E-commerce website",
        description:
            "E-commerce website that's built with React.js likely consists of multiple components that work together to create a seamless user experience. These components could include a header component, a product list component, a search bar component, and a filter component.",
        tags: [
            {
                name: "react.js",
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
        image: ecommerce,
        source_code_link: "https://github.com/Gurjantrandahwa/react_store",
    },
];

export {services, technologies, experiences, testimonials, projects};
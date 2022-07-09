import {
    SiFrontendmentor,
    SiJavascript,
    SiNetlify,
    SiMongodb,
    SiPhp,
    SiHeroku,
    SiMysql,
} from "react-icons/si"
import {
    FaGithub,
    FaAward,
    FaFacebookSquare,
    FaHtml5,
    FaReact,
    FaSass,
    FaNodeJs,
    FaLaravel,
} from "react-icons/fa"
import { BsLinkedin, BsBootstrapFill, BsGithub } from "react-icons/bs"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"
import { TiCss3 } from "react-icons/ti"

import * as img from "./assets/images"

export const socialsData = [
    {
        id: 1,
        name: "Github",
        link: "https://github.com/VinhNguyenLe",
        icon: <FaGithub />,
    },
    {
        id: 2,
        name: "Linkedin",
        link: "https://www.linkedin.com/in/nguy%E1%BB%85n-l%C3%AA-vinh-728a03228/",
        icon: <BsLinkedin />,
    },
    {
        id: 3,
        name: "FrontendMentor",
        link: "https://www.frontendmentor.io/profile/VinhNguyenLe",
        icon: <SiFrontendmentor />,
    },
    {
        id: 4,
        name: "Facebook",
        link: "https://www.facebook.com/nguyenlevinhbn99/",
        icon: <FaFacebookSquare />,
    },
]

export const aboutData = [
    {
        id: 1,
        title: "Experience",
        detail: "3+ Years Working",
        icon: <FaAward />,
    },
    {
        id: 2,
        title: "Client",
        detail: "200+ Worldwide",
        icon: <FiUsers />,
    },
    {
        id: 3,
        title: "Projects",
        detail: "80+ Completed",
        icon: <VscFolderLibrary />,
    },
]

export const expData = [
    {
        name: "Frontend Development",
        tools: [
            {
                id: 1,
                name: "HTML",
                knowledge: "Intermediate",
                icon: <FaHtml5 />,
            },
            {
                id: 2,
                name: "CSS",
                knowledge: "Intermediate",
                icon: <TiCss3 />,
            },
            {
                id: 3,
                name: "Javasccript",
                knowledge: "Intermediate",
                icon: <SiJavascript />,
            },
            {
                id: 4,
                name: "ReactJS",
                knowledge: "Junior",
                icon: <FaReact />,
            },
            {
                id: 5,
                name: "SASS/SCSS",
                knowledge: "Junior",
                icon: <FaSass />,
            },
            {
                id: 6,
                name: "Bootstrap",
                knowledge: "Basic",
                icon: <BsBootstrapFill />,
            },
            {
                id: 7,
                name: "Git",
                knowledge: "Basic",
                icon: <BsGithub />,
            },
            {
                id: 8,
                name: "Netlify",
                knowledge: "Basic",
                icon: <SiNetlify />,
            },
        ],
    },
    {
        name: "Backend Development",
        tools: [
            {
                id: 1,
                name: "Node.js",
                knowledge: "Basic",
                icon: <FaNodeJs />,
            },
            {
                id: 2,
                name: "MongoDB",
                knowledge: "Basic",
                icon: <SiMongodb />,
            },
            {
                id: 3,
                name: "PHP",
                knowledge: "Basic",
                icon: <SiPhp />,
            },
            {
                id: 4,
                name: "Laravel",
                knowledge: "Basic",
                icon: <FaLaravel />,
            },
            {
                id: 5,
                name: "MySQL",
                knowledge: "Basic",
                icon: <SiMysql />,
            },
            {
                id: 6,
                name: "Heroku",
                knowledge: "Basic",
                icon: <SiHeroku />,
            },
        ],
    },
]

export const servicesData = [
    {
        serviceId: 1,
        name: "UI/UX Design",
        details: [
            {
                id: 1,
                content:
                    "Lorem, ipsum dolor sit amet consect adipisicing elit.",
            },
            {
                id: 2,
                content:
                    "Lorem, ipsum dolor sit amet consect adipisicing elit.",
            },
            {
                id: 3,
                content:
                    "Lorem, ipsum dolor sit amet consect adipisicing elit.",
            },
            {
                id: 4,
                content:
                    "Lorem, ipsum dolor sit amet consect adipisicing elit.",
            },
            {
                id: 5,
                content:
                    "Lorem, ipsum dolor sit amet consect adipisicing elit.",
            },
            {
                id: 6,
                content:
                    "Lorem, ipsum dolor sit amet consect adipisicing elit.",
            },
        ],
    },
    {
        serviceId: 2,
        name: "Web Development",
        details: [
            {
                id: 1,
                content:
                    "Lorem, ipsum dolor sit amet consect adipisicing elit.",
            },
            {
                id: 2,
                content:
                    "Lorem, ipsum dolor sit amet consect adipisicing elit.",
            },
            {
                id: 3,
                content:
                    "Lorem, ipsum dolor sit amet consect adipisicing elit.",
            },
            {
                id: 4,
                content:
                    "Lorem, ipsum dolor sit amet consect adipisicing elit.",
            },
            {
                id: 5,
                content:
                    "Lorem, ipsum dolor sit amet consect adipisicing elit.",
            },
            {
                id: 6,
                content:
                    "Lorem, ipsum dolor sit amet consect adipisicing elit.",
            },
        ],
    },
    {
        serviceId: 3,
        name: "Content Creation",
        details: [
            {
                id: 1,
                content:
                    "Lorem, ipsum dolor sit amet consect adipisicing elit.",
            },
            {
                id: 2,
                content:
                    "Lorem, ipsum dolor sit amet consect adipisicing elit.",
            },
            {
                id: 3,
                content:
                    "Lorem, ipsum dolor sit amet consect adipisicing elit.",
            },
            {
                id: 4,
                content:
                    "Lorem, ipsum dolor sit amet consect adipisicing elit.",
            },
            {
                id: 5,
                content:
                    "Lorem, ipsum dolor sit amet consect adipisicing elit.",
            },
            {
                id: 6,
                content:
                    "Lorem, ipsum dolor sit amet consect adipisicing elit.",
            },
        ],
    },
]

export const portfolioData = [
    {
        id: 1,
        title: "This is a portfolio item title 1",
        imgSrc: img.portfolio1,
        link: "https://github.com/",
        liveDemo: "https://www.frontendmentor.io/home",
    },
    {
        id: 2,
        title: "This is a portfolio item title 2",
        imgSrc: img.portfolio2,
        link: "https://github.com/",
        liveDemo: "https://www.frontendmentor.io/home",
    },
    {
        id: 3,
        title: "This is a portfolio item title 3",
        imgSrc: img.portfolio3,
        link: "https://github.com/",
        liveDemo: "https://www.frontendmentor.io/home",
    },
    {
        id: 4,
        title: "This is a portfolio item title 4",
        imgSrc: img.portfolio4,
        link: "https://github.com/",
        liveDemo: "https://www.frontendmentor.io/home",
    },
    {
        id: 5,
        title: "This is a portfolio item title 5",
        imgSrc: img.portfolio5,
        link: "https://github.com/",
        liveDemo: "https://www.frontendmentor.io/home",
    },
    {
        id: 6,
        title: "This is a portfolio item title 6",
        imgSrc: img.portfolio6,
        link: "https://github.com/",
        liveDemo: "https://www.frontendmentor.io/home",
    },
]

export const clientData = [
    {
        id: 1,
        name: "Tina Snow",
        imgSrc: img.avatar1,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quibusdam corporis, quaerat molestiae natus veniam quis modi autem necessitatibus! Rerum repellendus et, iure architecto nulla consequatur repellat itaque omnis quos.",
    },
    {
        id: 2,
        name: "Shatta Wale",
        imgSrc: img.avatar2,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quibusdam corporis, quaerat molestiae natus veniam quis modi autem necessitatibus! Rerum repellendus et, iure architecto nulla consequatur repellat itaque omnis quos.",
    },
    {
        id: 3,
        name: "Kwame Despite",
        imgSrc: img.avatar3,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quibusdam corporis, quaerat molestiae natus veniam quis modi autem necessitatibus! Rerum repellendus et, iure architecto nulla consequatur repellat itaque omnis quos.",
    },
    {
        id: 4,
        name: "Ernest Achiever",
        imgSrc: img.avatar4,
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quibusdam corporis, quaerat molestiae natus veniam quis modi autem necessitatibus! Rerum repellendus et, iure architecto nulla consequatur repellat itaque omnis quos.",
    },
]

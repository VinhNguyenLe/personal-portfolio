import React from "react"
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai"
import { BiBook, BiMessageSquareDetail } from "react-icons/bi"
import { RiServiceLine } from "react-icons/ri"
import "./nav.scss"

function Nav() {
    const [activeNav, setActiveNav] = React.useState("header")
    return (
        <nav>
            <a
                href="#header"
                rel="noreferrer"
                className={activeNav === "header" ? "active" : ""}
                onClick={() => setActiveNav("header")}
            >
                <AiOutlineHome />
            </a>
            <a
                href="#about"
                rel="noreferrer"
                className={activeNav === "about" ? "active" : ""}
                onClick={() => setActiveNav("about")}
            >
                <AiOutlineUser />
            </a>
            <a
                href="#experience"
                rel="noreferrer"
                className={activeNav === "experience" ? "active" : ""}
                onClick={() => setActiveNav("experience")}
            >
                <BiBook />
            </a>
            <a
                href="#services"
                rel="noreferrer"
                className={activeNav === "services" ? "active" : ""}
                onClick={() => setActiveNav("services")}
            >
                <RiServiceLine />
            </a>
            <a
                href="#contact"
                rel="noreferrer"
                className={activeNav === "contact" ? "active" : ""}
                onClick={() => setActiveNav("contact")}
            >
                <BiMessageSquareDetail />
            </a>
        </nav>
    )
}

export default Nav

import React from "react"
import "./header.scss"
import CTA from "./CTA"
import HeaderSocials from "./HeaderSocials"
import Me from "../../assets/images/me.png"

function Header() {
    return (
        <header id="header">
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Nguyen Le Vinh</h1>
                <h5 className="text-light">Frontend Developer</h5>
                <CTA />
                <HeaderSocials />
                <div className="me">
                    <img src={Me} alt="me" />
                </div>
                <a href="#contact" className="scroll__down">
                    Scroll Down
                </a>
            </div>
        </header>
    )
}

export default Header

import React from "react"
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa"
import "./footer.scss"

function Footer() {
    return (
        <footer>
            <a
                href="https://facebook.com/nguyenlevinhbn99"
                target="_blank"
                rel="noreferrer"
                className="footer__logo"
            >
                NLV
            </a>
            <ul className="permalinks">
                <li>
                    <a href="#header" rel="noreferrer">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#about" rel="noreferrer">
                        About
                    </a>
                </li>
                <li>
                    <a href="#experience" rel="noreferrer">
                        Experience
                    </a>
                </li>
                <li>
                    <a href="#services" rel="noreferrer">
                        Services
                    </a>
                </li>
                <li>
                    <a href="#portfolio" rel="noreferrer">
                        Portfolio
                    </a>
                </li>
                <li>
                    <a href="#testimonials" rel="noreferrer">
                        Testimonials
                    </a>
                </li>
                <li>
                    <a href="#contact" rel="noreferrer">
                        Contact
                    </a>
                </li>
            </ul>
            <div className="footer__socials">
                <a
                    href="https://facebook.com/nguyenlevinhbn99"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaFacebookF />
                </a>
                <a
                    href="https://github.com/VinhNguyenLe"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.instagram.com/nlv99/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaInstagram />
                </a>
            </div>
            <div className="footer__copyright">
                <small>
                    Rebuild according to instructions of EGATOR Tutorials.
                </small>
            </div>
        </footer>
    )
}

export default Footer

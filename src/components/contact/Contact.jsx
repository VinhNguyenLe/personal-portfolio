import React from "react"
import { MdOutlineEmail } from "react-icons/md"
import { RiMessageLine } from "react-icons/ri"
import { BsWhatsapp } from "react-icons/bs"

import emailjs from "emailjs-com"

import "./contact.scss"

function Contact() {
    const formRef = React.useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            "service_lftf73a",
            "template_wo2ltue",
            formRef.current,
            "P8Tw3B4TGuNnUs2P2"
        )

        alert("Mail sent successfully")
        e.target.reset()
    }

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>levinhbn99@gmail.com</h5>
                        <a
                            href="mailto:levinhbn99@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Send a message
                        </a>
                    </article>
                    <article className="contact__option">
                        <RiMessageLine className="contact__option-icon" />
                        <h4>Message</h4>
                        <h5>nguyenlevinhbn99</h5>
                        <a
                            href="https://m.me/nguyenlevinhbn99"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Send a message
                        </a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>WhatsApp</h4>
                        <h5>+84869023271</h5>
                        <a
                            href="https://api.whatsapp.com/send?phone=84869023271"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Send a message
                        </a>
                    </article>
                </div>
                <form ref={formRef} onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="7"
                        required
                    ></textarea>
                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact

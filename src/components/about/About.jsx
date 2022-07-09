import React from "react"
import Me from "../../assets/images/me-about.jpg"
import "./about.scss"

import { aboutData } from "../../data"

function About() {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={Me} alt="about img" />
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        {aboutData.map((item) => (
                            <article className="about__card" key={item.id}>
                                <span className="about__icon">{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.detail}</small>
                            </article>
                        ))}
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Molestias nemo culpa magni magnam. Architecto
                        corrupti sint voluptate, eligendi consequuntur earum,
                        inventore dolore aliquam eos cupiditate aut odio
                        perspiciatis laborum explicabo!
                    </p>
                    <a
                        href="#contact"
                        rel="noreferrer"
                        className="btn btn-primary about__btn"
                    >
                        Let's Talk
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About

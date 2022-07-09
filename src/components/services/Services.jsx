import React from "react"
import { BiCheck } from "react-icons/bi"
import "./services.scss"

import { servicesData } from "../../data"

function Services() {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className="container services__container">
                {servicesData.map((service, index) => (
                    <article className="service" key={index}>
                        <div className="service__head">
                            <h3>{service.name}</h3>
                        </div>

                        <ul className="service__list">
                            {service.details.map((detail, index) => (
                                <li key={index}>
                                    <BiCheck className="service__list-icon" />
                                    <p>{detail.content}</p>
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Services

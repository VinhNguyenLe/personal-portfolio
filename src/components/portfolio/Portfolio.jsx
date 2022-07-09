import React from "react"
import "./portfolio.scss"

import { portfolioData } from "../../data"

function Portfolio() {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {portfolioData.map((item) => (
                    <article className="portfolio__item" key={item.id}>
                        <div className="portfolio__item-image">
                            <img
                                src={item.imgSrc}
                                alt={`Portfolio project ${item.id}`}
                            />
                        </div>
                        <h3>{item.title}</h3>
                        <div className="portfolio__item-cta">
                            <a
                                href={item.link}
                                rel="noreferrer"
                                target="_blank"
                                className="btn"
                            >
                                Github
                            </a>
                            <a
                                href={item.liveDemo}
                                rel="noreferrer"
                                target="_blank"
                                className="btn btn-primary"
                            >
                                Live Demo
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Portfolio

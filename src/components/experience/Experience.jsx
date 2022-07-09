import React from "react"
import "./experience.scss"

import { expData } from "../../data"

function Experience() {
    return (
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience__container">
                {expData.map((item, index) => (
                    <div className="experience__frontend" key={index}>
                        <h3>{item.name}</h3>
                        <div className="experience__content">
                            {item.tools.map((tool) => (
                                <article
                                    className="experience__details"
                                    key={tool.id}
                                >
                                    <div className="experience__icon">
                                        {tool.icon}
                                    </div>
                                    <div>
                                        <h4>{tool.name}</h4>
                                        <small className="text-light">
                                            {tool.knowledge}
                                        </small>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experience

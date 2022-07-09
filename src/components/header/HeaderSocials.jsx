import React from "react"

import { socialsData } from "../../data"

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            {socialsData.map((item, index) => (
                <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    key={item.id}
                >
                    {item.icon}
                </a>
            ))}
        </div>
    )
}

export default HeaderSocials

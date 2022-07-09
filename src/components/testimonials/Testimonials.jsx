import React from "react"

import { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/pagination"

import "./testimonials.scss"

import { clientData } from "../../data"

function Testimonials() {
    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper
                className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {clientData.map((item) => (
                    <SwiperSlide className="testimonial" key={item.id}>
                        <div className="client__avatar">
                            <img src={item.imgSrc} alt="Client avatar" />
                        </div>
                        <h5 className="client__name">{item.name}</h5>
                        <small className="client__review">{item.review}</small>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Testimonials

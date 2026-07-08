import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

const Level1 = () => {
    return (
        <div>
            <h1>Level 1</h1>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img
                        src="https://res.cloudinary.com/o7vbtffn/image/upload/v1783474816/r1_v51cl2.jpg"
                        alt="Story-1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://res.cloudinary.com/o7vbtffn/image/upload/v1783474816/r1_v51cl2.jpg"
                        alt="Story-2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://res.cloudinary.com/o7vbtffn/image/upload/v1783474816/r1_v51cl2.jpg"
                        alt="Story-3"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://res.cloudinary.com/o7vbtffn/image/upload/v1783474816/r1_v51cl2.jpg"
                        alt="Story-4"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://res.cloudinary.com/o7vbtffn/image/upload/v1783474816/r1_v51cl2.jpg"
                        alt="Story-5"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Level1
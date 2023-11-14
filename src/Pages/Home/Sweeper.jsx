import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slider1 from "../../assets/slide1.jpg"
import slider2 from "../../assets/slide2.jpg"
import slider3 from "../../assets/slide3.jpg"
import slider4 from "../../assets/slide4.jpg"
import slider5 from "../../assets/slide5.jpg"
import Sectiontittle from '../../Shared/Sectiontittle';

const Sweeper = () => {
    return (
        <section>
            <Sectiontittle
            tittle={'---From 11:00am to 10:00pm---'}
            subtittle={"ORDER ONLINE"}
            >           
            </Sectiontittle>
            <Swiper
                initialSlide={2}
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-8"
            >
                <SwiperSlide><img src={slider1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={slider5} alt="" /></SwiperSlide>
            </Swiper>
        </section>

    );
};

export default Sweeper;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./SliderRes.css";
import SliderItem from "../SliderItem/SliderItem";
export default function MySliderRes() {
    return (
        <div className="my-test">
            <Swiper
                slidesPerView={1}
                grid={{
                    rows: 1,
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <SliderItem />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem />
                </SwiperSlide>
                <SwiperSlide>
                    <SliderItem />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

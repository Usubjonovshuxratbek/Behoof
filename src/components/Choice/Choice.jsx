import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./ChoiceRes.css";
import Mac from '../../assets/img/mac.png'
import './Choice.scss'
import MySlider from '../Slider/Slider';
import MySliderRes from "../SliderRes/SliderRes";

function Choice() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <>
      <section className='choice'>
        <div className="choicerotate"></div>
        <div className="container">
          <div className="choice-inner">
            <h2>Лучший выбор</h2>
            <ul className='choice-list'>
              {
                arr?.map((item, index) => (
                  <li key={index} className='choice-item'>
                    <div>
                      <img src={Mac} alt="" />
                    </div>
                    <p>Ноутбуки</p>
                  </li>
                ))
              }
            </ul>
            <div className="choice__buttons">
              <ul>
                <li>
                  <div className="buttons">

                  </div>
                </li>
              </ul>
            </div>
            <MySlider />
          </div>
        </div>
      </section>



      <section className="choice-res">
        <div className="choicerotate"></div>
        <div className="container">
          <div className="choice-inner">
            <h2>Лучший выбор</h2>
            <ul className='choice-list'>
              <Swiper
                slidesPerView={3}
                spaceBetween={20}

              >
                <SwiperSlide>
                  <div className="product">
                    <div className="product-bg">
                      <img src={Mac} alt="" />
                    </div>
                    <p>Ноутбуки</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="product">
                    <div className="product-bg">
                      <img src={Mac} alt="" />
                    </div>
                    <p>Ноутбуки</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="product">
                    <div className="product-bg">
                      <img src={Mac} alt="" />
                    </div>
                    <p>Ноутбуки</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="product">
                    <div className="product-bg">
                      <img src={Mac} alt="" />
                    </div>
                    <p>Ноутбуки</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="product">
                    <div className="product-bg">
                      <img src={Mac} alt="" />
                    </div>
                    <p>Ноутбуки</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="product">
                    <div className="product-bg">
                      <img src={Mac} alt="" />
                    </div>
                    <p>Ноутбуки</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="product">
                    <div className="product-bg">
                      <img src={Mac} alt="" />
                    </div>
                    <p>Ноутбуки</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="product">
                    <div className="product-bg">
                      <img src={Mac} alt="" />
                    </div>
                    <p>Ноутбуки</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="product">
                    <div className="product-bg">
                      <img src={Mac} alt="" />
                    </div>
                    <p>Ноутбуки</p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </ul>
          </div>
        </div>
        <MySliderRes />
      </section>
    </>
  )
}

export default Choice

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./ChoiceRes.css";
import Mac from '../../assets/img/mac.png'
import Smartpon from '../../assets/img/smartpon.png'
import Planshet from '../../assets/img/planshet.png'
import Watch from '../../assets/img/watch.png'
import Play from '../../assets/img/play.png'
import Naushnik from '../../assets/img/naushnik.png'
import Kalonka from '../../assets/img/kalonka.png'
import Acsesuar from '../../assets/img/acsesuar.png'
import './Choice.scss'
import MySlider from '../Slider/Slider';
import MySliderRes from "../SliderRes/SliderRes";
import { HomeChoice } from "../../data/data";
import { Link } from "react-router-dom";

function Choice() {

  return (
    <>
      <section className='choice'>
        <div className="choicerotate"></div>
        <div className="container">
          <div className="choice-inner">
            <h2>Лучший выбор</h2>
            <ul className='choice-list'>
              {
                HomeChoice?.map((item, index) => (
                  <li key={index} className='choice-item'>
                    <div>
                      <img src={Mac} alt="" />
                    </div>
                    <p>{item.name}</p>                    
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
                      <img src={Smartpon} alt="" />
                    </div>
                    <p>Смартфоны</p>
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
                      <img src={Planshet} alt="" />
                    </div>
                    <p>Планшеты</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="product">
                    <div className="product-bg">
                      <img src={Watch} alt="" />
                    </div>
                    <p>Умные часы</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="product">
                    <div className="product-bg">
                      <img src={Play} alt="" />
                    </div>
                    <p>Игровые приставки</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="product">
                    <div className="product-bg">
                      <img src={Naushnik} alt="" />
                    </div>
                    <p>Наушники</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="product">
                    <div className="product-bg">
                      <img src={Kalonka} alt="" />
                    </div>
                    <p>колонки</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="product">
                    <div className="product-bg">
                      <img src={Acsesuar} alt="" />
                    </div>
                    <p>Аксесуары</p>
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

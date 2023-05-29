import React from 'react'
import { Link } from 'react-router-dom'
import SortIcon from '../../../assets/img/arrow-icon.png'
import FilterIcon from '../../../assets/img/setting-icon.png'
import './Hero.scss'

function Hero() {
  return (
    <div className='hero__about'>
      <div className="container">
        <div className="hero__inner">
          <div className="hero__links">
            <Link className='home' to='/'>Главная</Link>
            <b>/</b>
            <Link className='smatpon' to='/about'>Смартфоны</Link>
          </div>
          <h2>Смартфоны</h2>
          <div className="hero__main">
            <div className="characteristic">
              <h3 className='characteristic-title'>Качественные характеристики</h3>
              <div className="blocks">
                <div className="price-block">
                  <p>Цена</p>
                  <div className="prices">
                    <button className='low-price'>От 12 511</button>
                    <button className='hight-price'>До 99 511</button>
                  </div>
                  <h3>Диапазон</h3>
                  <div className="box">
                    <input type="radio" name='choose' />
                    <span>0 - 10 000 ₽</span>
                  </div>
                  <div className="box">
                    <input type="radio" name='choose' />
                    <span>10 000 - 20 000 ₽</span>
                  </div>
                  <div className="box">
                    <input type="radio" name='choose' />
                    <span>20 000 - 30 000 ₽</span>
                  </div>
                  <div className="box">
                    <input type="radio" name='choose' />
                    <span>30 000 ₽</span>
                  </div>
                </div>
                <div className="battery-block">
                  <span>Батарея</span>
                  <div className="box">
                    <input type="radio" />
                    <span>Text label</span>
                  </div>
                  <div className="box">
                    <input type="radio" />
                    <span>Text label</span>
                  </div>
                  <div className="box">
                    <input type="radio" />
                    <span>Text label</span>
                  </div>
                  <div className="box">
                    <input type="radio" />
                    <span>Text label</span>
                  </div>
                  <div className="box">
                    <input type="radio" />
                    <span>Text label</span>
                  </div>
                  <div className="box">
                    <input type="radio" />
                    <span>Text label</span>
                  </div>
                </div>
                <div className="camera-block">
                  <span>Камера</span>
                  <div className="box">
                    <input type="radio" />
                    <span>Text label</span>
                  </div>
                  <div className="box">
                    <input type="radio" />
                    <span>Text label</span>
                  </div>
                  <div className="box">
                    <input type="radio" />
                    <span>Text label</span>
                  </div>
                  <div className="box">
                    <input type="radio" />
                    <span>Text label</span>
                  </div>
                  <div className="box">
                    <input type="radio" />
                    <span>Text label</span>
                  </div>
                  <div className="box">
                    <input type="radio" />
                    <span>Text label</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter">
              <h3>Дополнительные фильтры</h3>
              <div className="blocks">
                <div className="answer-block">
                  <span>Ответ</span>
                  <div className="box">
                    <input type="radio" />
                    <span>Text label</span>
                  </div>
                  <div className="box">
                    <input type="radio" />
                    <span>Text label</span>
                  </div>
                  <div className="box">
                    <input type="radio" />
                    <span>Text label</span>
                  </div>
                  <div className="box">
                    <input type="radio" />
                    <span>Text label</span>
                  </div>
                  <div className="box">
                    <input type="radio" />
                    <span>Text label</span>
                  </div>
                  <div className="box">
                    <input type="radio" />
                    <span>Text label</span>
                    
                  </div>
                </div>
                <div className="portability-block">
                  <span>Портативность</span>
                  <div className="box">
                    <input type="radio" />
                    <span>Text label</span>
                  </div>
                  <div className="box">
                    <input type="radio" />
                    <span>Text label</span>
                  </div>
                  <div className="box">
                    <input type="radio" />
                    <span>Text label</span>
                  </div>
                  <div className="box">
                    <input type="radio" />
                    <span>Text label</span>
                  </div>
                  <div className="box">
                    <input type="radio" />
                    <span>Text label</span>
                  </div>
                  <div className="box">
                    <input type="radio" />
                    <span>Text label</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero__main-res">
            <div className="hero__main-inner">
            <Link to='/' className='sort-btn'>
                <img src={SortIcon} alt="" />
                <p>Сортировка</p>
              </Link>
              <div className="liner"></div>
              <Link to='/' className='filter-btn'>
                <img src={FilterIcon} alt="" />
                <p>Фильтры</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero
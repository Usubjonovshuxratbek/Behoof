import React, { useState } from 'react'
import { AboutPhone } from '../../../data/About'
import './Main.scss'
import CheckIcon from '../../../assets/img/check-icon.png'
import { Link } from 'react-router-dom'

function Main() {
    const arr = [1, 2, 3, 4, 5]
    const [designer, setDesigner] = useState(4)
    const [power, setPower] = useState(2)
    const [display, setDisplay] = useState(4)
    const [camera, setCamera] = useState(5)
    const [answer, setAnswer] = useState(5)
    const [portability, setPortability] = useState(4)

    return (
        <>
            <section className='product container'>
                <ul className='product-list'>
                    {
                        AboutPhone?.map((item, index) => (
                            <li className='product-item' key={index}>
                                <div className="product__about">
                                    <div className="product__about-inner">
                                        <div className="img">
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className="info">
                                            <div className="top-btns">
                                                <button className='evaluation-btn'>
                                                    <span>4.4</span>
                                                    <p>Оценка экспертов</p>
                                                </button>
                                                <div className='btns'>
                                                    <button><i className='bi bi-heart'></i></button>
                                                    <button><i class="bi bi-bar-chart-line"></i></button>
                                                </div>
                                            </div>
                                            <div className="center">
                                                <div className="name">
                                                    <h2>{item.name}</h2>
                                                </div>
                                                <div className="price">
                                                    <p>{item.bonus}%</p>
                                                    <span>{item.price}</span>
                                                </div>
                                            </div>
                                            <div className="bottum">
                                                <div className="blocks">
                                                    <div className="block-1">
                                                        <div className="box">
                                                            <img src={CheckIcon} alt="" />
                                                            <p>{item.dualSim}</p>
                                                        </div>
                                                        <div className="box">
                                                            <img src={CheckIcon} alt="" />
                                                            <p>{item.inches}</p>
                                                        </div>
                                                        <div className="box">
                                                            <img src={CheckIcon} alt="" />
                                                            <p>{item.processor}</p>
                                                        </div>
                                                        <div className="box">
                                                            <img src={CheckIcon} alt="" />
                                                            <p>{item.front}</p>
                                                        </div>
                                                    </div>
                                                    <div className="block-2">
                                                        <div className="box">
                                                            <img src={CheckIcon} alt="" />
                                                            <p>{item.ram}</p>
                                                        </div>
                                                        <div className="box">
                                                            <img src={CheckIcon} alt="" />
                                                            <p>{item.memory}</p>
                                                        </div>
                                                        <div className="box">
                                                            <img src={CheckIcon} alt="" />
                                                            <p>{item.mah}</p>
                                                        </div>
                                                        <div className="box">
                                                            <img src={CheckIcon} alt="" />
                                                            <p>{item.ics}</p>
                                                        </div>
                                                        <div className="box">
                                                            <img src={CheckIcon} alt="" />
                                                            <p>{item.ram}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="asaid">
                                            <div className="progress">
                                                <p>Дизайн</p>
                                                <div>
                                                    {
                                                        arr?.map((item, index) => (
                                                            <span className={designer >= index + 1 ? 'activer' : null}></span>
                                                        ))
                                                    }
                                                </div>
                                                <p>Батарея</p>
                                                <div>
                                                    {
                                                        arr?.map((item, index) => (
                                                            <span className={power >= index + 1 ? 'activer' : null}></span>
                                                        ))
                                                    }
                                                </div>
                                                <p>Дисплей</p>
                                                <div>
                                                    {
                                                        arr?.map((item, index) => (
                                                            <span className={display >= index + 1 ? 'activer' : null}></span>
                                                        ))
                                                    }
                                                </div>
                                                <p>Камера</p>
                                                <div>
                                                    {
                                                        arr?.map((item, index) => (
                                                            <span className={camera >= index + 1 ? 'activer' : null}></span>
                                                        ))
                                                    }
                                                </div>
                                                <p>Ответ</p>
                                                <div>
                                                    {
                                                        arr?.map((item, index) => (
                                                            <span className={answer >= index + 1 ? 'activer' : null}></span>
                                                        ))
                                                    }
                                                </div>
                                                <p>Портативность</p>
                                                <div>
                                                    {
                                                        arr?.map((item, index) => (
                                                            <span className={portability >= index + 1 ? 'activer' : null}></span>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            <Link to='/'>Перейти к товару</Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </section>
            <section className='product__res container'>
                <ul className='product__list'>
                    {
                        AboutPhone?.map((item, index) => (
                            <li key={index} className='product__item'>
                                <div className="product__about">
                                    <div className="top-btns">
                                        <button className='evaluation-btn'>
                                            <span>4.4</span>
                                            <p>Оценка экспертов</p>
                                        </button>
                                    </div>
                                    <h2>{item.name}</h2>
                                    <div className="price">
                                        <span>{item.price}</span>
                                        <p>{item.bonus}%</p>
                                    </div>
                                    <div className='btns'>
                                        <button><i className='bi bi-heart'></i></button>
                                        <button><i class="bi bi-bar-chart-line"></i></button>
                                    </div>
                                    <div className="product-main">
                                        <div className="img">
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className="info">
                                            <div className="block">
                                                <div className="box">
                                                    <img src={CheckIcon} alt="" />
                                                    <p>{item.ram}</p>
                                                </div>
                                                <div className="box">
                                                    <img src={CheckIcon} alt="" />
                                                    <p>{item.memory}</p>
                                                </div>
                                                <div className="box">
                                                    <img src={CheckIcon} alt="" />
                                                    <p>{item.mah}</p>
                                                </div>
                                                <div className="box">
                                                    <img src={CheckIcon} alt="" />
                                                    <p>{item.ics}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </>
    )
}

export default Main

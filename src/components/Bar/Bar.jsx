import React from 'react'
import './Bar.scss'

function Bar() {
  return (
    <div className='bar'>
      <div className="container">
        <div className="bar__inner">
          <div className="home">
          <i class="bi bi-house"></i>
          <p>Главная</p>
          </div>
          <div className="search">
          <i class="bi bi-search"></i>
          <p>Каталог</p>
          </div>
          <div className="heart">
          <i class="bi bi-heart"></i>
          <p>Избранное</p>
          </div>
          <div className="chart">
          <i class="bi bi-bar-chart-line"></i>
          <p>Сравнения</p>
          </div>
          <div className="acount">
          <i class="bi bi-person"></i>
          <p>Профиль</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Bar

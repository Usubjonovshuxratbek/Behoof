import React from 'react'
import Hero from '../../components/Hero/Hero'
import Choice from '../../components/Choice/Choice'
import OurGoal from '../../components/OurGoal/OurGoal'
import Social from '../../components/Social/Social'
import News from '../../components/News/News'

function Home() {
  return (
    <div className='home'>
      <Hero />
      <Choice />
      <OurGoal />
      <Social />
      <News />
    </div>
  )
}

export default Home


import Hero from '@/Components/Hero'
import About from '@/Components/Navebar/About'
import Projects from '@/Components/Projects'
import Services from '@/Components/Services'


import React from 'react'

const index = () => {
  return (
    <div className='home'>
    
     <Hero/>
     <Services/>
     <Projects/>
    </div>
  )
}

export default index
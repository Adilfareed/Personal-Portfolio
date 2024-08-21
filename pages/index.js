
import Footer from '@/Components/Footer'
import Hero from '@/Components/Hero'

import Project from '@/Components/Project'
import Services from '@/Components/Services'
import Link from 'next/link'


import React from 'react'

const index = () => {
  return (
    <div className='home'>
    
     <Hero/>
     <Services/>
     <Project/>
     <div className="view" >
        <Link href="/projects">View All</Link>
      </div>
      <Footer/>
    </div>
  )
}

export default index
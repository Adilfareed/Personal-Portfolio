import React from 'react'
import Image from 'next/image'
import profile_pic from "/public/work picture.jpg"
import Particle from './Particals'

const Hero = () => {
  return (
    
    <div className='main-hero'>
    
      <div className='Left-div'>
       <h1 className='name'> MERN STACK DEVELOPER!</h1> <br/>
       <h3 className='text'>Unleashing the Power <br/> of MERN Stack 
        <br/>Development.</h3> 
        <p className='intro'>Passionate Mern Stack Developer crafting  <br/> seamless digital experiences, <br/>  merging front-end elegance with <br/>back-end functionality.  <br/> Let's innovate together!</p>
      </div>
      <div className='right-div'>
      <Image className='pic'
      src={profile_pic}     
       
      alt="Picture of the author"
    />
      </div>
    </div>
  )
}

export default Hero
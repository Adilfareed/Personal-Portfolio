import React from 'react'
import Image from 'next/image'
import profile_pic from "/public/work picture.jpg"


const Hero = () => {
  return (
    <div className='main-hero'>
      <div className='Left-div'>
       <h1 className='name'> Adil Fareed</h1> <br/>
        <span className='text'>Web Devloper</span>
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
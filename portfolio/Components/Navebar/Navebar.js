import React from 'react'
import Link from 'next/link';

const Navebar = () => {
  return (
    <div className='navebar-main'>
    <div className='navebar' >
    <ul className='navebar-ul' >
        <Link href="/"><li> Home </li></Link>  
       <Link href="/about">About  </Link>  
        <Link href="/contact"><li>Contact</li> </Link>
    </ul>
    </div>
    </div>
  )
}

export default Navebar
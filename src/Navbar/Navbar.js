import React from 'react';
import './Navbar.css'
import img1 from '../asset/Vector (21).png'
import img2 from '../asset/image 229.png'

export const Navbar = () => {
  return (
    <div className='nav'>
        
            <div className='left-header'>
                <p>Welcome Shakir</p>
        
            </div>
            <div className='right-header'>
                 <img src={img1} alt='img1'/>
                 <img src={img2} alt='img2'/>
                <p>Luthfil Shakir Member</p>
            
        </div>
    </div>
  )
}

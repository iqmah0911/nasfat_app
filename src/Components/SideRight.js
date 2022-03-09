import React from 'react'
import './SideRight.css'
import { useState } from 'react'



export default function SideRight(){
  const[clicked, setClicked]=useState(true)
  const myhandle = () => {   // THESE HERE TOO
    setClicked(!clicked);
  };
  return (
    
    <div className='side-right'>
      <div className='upper'>
      

      <div className='left-header'>
      
      <i className={clicked ? 'fa fa-bars' : 'fa fa-times'} onClick={myhandle}/>

        
            </div>
            <div className='right-header'>
              <div className='img-border'>
                 <img alt="img" className="img-circle avatar" width="40" src="http://members.nasfat.org/assets/img/profile.png"></img>
                 </div>
                <p>Iqmah</p>
                <i className="fa fa-caret-down" aria-hidden="true"></i>
                
            
        </div>
        
      

      </div>
        
    </div>
  )
}

import React from 'react'
import newss from './newss.jpg'
import './Navbar12.css'
import HamburgerIcon from './HamburgerIcon'

function Navbar12({setCategory}) {
    return (
        <div className="navbar">
            <div className="icon"><HamburgerIcon setCategory={setCategory}/>    </div>
              <img style={{cursor:"pointer"}}    src={newss} alt="logo" height="80%"></img>
            
        </div>
    )
}

export default Navbar12


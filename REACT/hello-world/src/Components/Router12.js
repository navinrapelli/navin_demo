import React from 'react'
import Route from 'react-router-dom/Route'
import {BrowserRouter as Router,Link,NavLink} from 'react-router-dom'
import './Router12.css'
import DigitalClockf1 from './DigitalClockf1'


function Router12() {
    return (
        <div className="link1">
            
            <div id="one">
             <NavLink to="/home" activeStyle={{backgroundColor:"violet"}} >HOME </NavLink>
            <NavLink to="/projects" activeStyle={{backgroundColor:"violet"}}>PROJECTS</NavLink>
            <NavLink to="/service" activeStyle={{backgroundColor:"violet"}}>SERVICE</NavLink>
            <NavLink to="/contact" activeStyle={{backgroundColor:"violet"}}>CONTACT</NavLink>
            </div>
            <div id="two">
            <Route  path="/home" exact render={()=>
                        {

                        return <h1> You Select <span>HOME</span>   </h1>
                        }} />
             <Route path="/projects" exact render={()=>
                        {

                        return    <DigitalClockf1></DigitalClockf1>                              //<h1> You Select <span>PROJECTS</span> </h1>
                       
                        }}/>
            <Route path="/service" exact render={()=>
                        {

                        return <h1>You Select <span>SERVICE</span> </h1>
                        }}/>
            <Route path="/contact" exact render={()=>
                        {

                        return <h1>You Select <span>CONTACT</span></h1>
                        }}/>
            </div>
        </div>
    )
}

export default Router12

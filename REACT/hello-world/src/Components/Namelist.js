import React from 'react'
import './FromStyle.css'

function Namelist(props) {
     
    const items=props.items;
    
    const  listitems =items.map(item =>
        {
                
              return <div className="list" key={item.key}{...item.key1}>
                        <h3 > <span className="one">{item.text} </span>  <span className="two">{item.text1}</span>            
                        <span className="delete"><button onClick={()=>props.deleteitem(item.key)}>Delete</button></span>
                        </h3>
                   </div>
    }) 
    
    return (
      
             <div>{listitems}</div>
    )
}

export default Namelist;

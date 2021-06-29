import React,{useState} from 'react'

function HookCounter4() {

    const [item,setitem]=useState([]);
  
    return (
        <div>
            <button onClick={()=>setitem([...item,{id:item.length,value:Math.floor(Math.random()*10)+1}])}>AddItem</button>
            <ul>
              
              {    
                  item.map(item=>(
                   
                    <li key={item.id}> {item.value} </li>

                  ))


              }
    
            </ul>
        </div>
    )
}

export default HookCounter4

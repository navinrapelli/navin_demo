import React,{useState} from 'react'

function HookCountertwo() {
    const [name,setname]=useState({firstname:"",lasname:""});  //use spread operator name which spread the objects in contents and assing firstname as value
    return (
        <div>
             
             <input type="text" value={name.firstname} onChange={e=>setname({...name,firstname:e.target.value})}></input>
             <input type="text" value={name.lasname} onChange={e=>setname({...name,lasname:e.target.value})}></input>

            



             <h1>the first name  is {name.firstname}</h1>
             <h1>the last name is {name.lasname}</h1>

             <h1>{JSON.stringify(name)}</h1>

             
              
        </div>
    )
}

export default HookCountertwo

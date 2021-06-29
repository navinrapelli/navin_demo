import React,{useState} from 'react'

function Hookcounterone() {
    const[count,setCount]=useState(0)

    return (
        <div>
            {count}
         <button onClick={()=>setCount(prevCount =>prevCount+1)}>incrment</button>
         
         <button onClick={()=>setCount(prevCount =>prevCount-1)}>decrment</button>
         
         <button onClick={()=>setCount(0)}>Reset</button>

         <button onClick={()=>setCount(prevCount =>prevCount+5)}>incri+5</button>
        </div>
    )
}

export default Hookcounterone

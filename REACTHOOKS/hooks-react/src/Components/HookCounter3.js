import React,{useState} from 'react'

function HookCounter3() {
    const [name1,setname1]=useState({firstname:"",lastname:""})
    const [item,setitme]=useState([])
    const [del,delteteid]=useState('')

   /* delteteid=(key)=>
    {    
         del=this.state.item.filter(items=>
             
            items.key!==key
            
            )

            this.setState({
                
                item:del
            })

            


    }*/
    return (
        <div>
            <label>name:</label>
            <input type="text" value={name1.firstname} onChange={e=>setname1({...name1,firstname:e.target.value})}></input>
             <br></br>
            <label>job:</label>
            <input type="text" value={name1.lastname} onChange={e=>setname1({...name1,lastname:e.target.value})}></input>
            <br></br>
            <button onClick={()=>setitme([...item,{firstname:name1.firstname,lastname:name1.lastname}])}>Submit</button>
            <ul>
                  {
                      item.map(item=>(


                        <li key={item.id}>{item.firstname}{item.lastname} <button onClick={key=>delteteid( del=this.state.item.filter(items=>
             
                            items.key!==key
                            
                            ),{item:del})}>Delete</button> </li>
                      ))
                  }
            </ul>
        </div>
    )
}

export default HookCounter3

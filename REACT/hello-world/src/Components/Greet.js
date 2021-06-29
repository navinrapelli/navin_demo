import React from 'react'
function Greet(props)  //we can use ({name,heroname} ) its called distructuring funcion para and instead of prps.name we use only name
{

   //here we can use like this const{name,heroname}=props its called distructuring using object props
    return ( 
     <div>
            <h1>hello {props.name} {props.heroname}</h1> 
                    {/*<p> {props.children }</p>*/}

    </div>
    )  

}

    

export default Greet
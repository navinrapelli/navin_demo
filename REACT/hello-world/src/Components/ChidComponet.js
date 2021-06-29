import React from 'react'

function ChidComponet(props) {
    return (
        <div>
            <button onClick={props.greetHandler}>Greet Parent</button>
        </div>
    )              //here we pass method greethandler to childcompoent
                   //and we also pass parameters onClic={()=>props.greethandler("child")}
}

export default ChidComponet

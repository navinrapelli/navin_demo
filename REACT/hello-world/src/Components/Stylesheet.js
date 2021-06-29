import React from 'react'
import './Mystyle.css'

function Stylesheet(props) {
   
    let classname=props.primary?'primary':''
     
    return (
        <div>
            <h1  className={`${classname} foont`}>StyleSheet</h1>
        </div>
    )
}

export default Stylesheet

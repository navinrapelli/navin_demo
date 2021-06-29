import React, { Component } from 'react'
import ChidComponet from './ChidComponet'

export class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentname:"Parent"
        }

        this.greetParent=this.greetParent.bind(this)
    }

    greetParent()   //childName
    {

        alert(`hellow ${this.state.parentname}`);   //in bacticks simply add ${childName}
    }
    
    render() {
        return (
            <div>
                 <ChidComponet greetHandler={this.greetParent}/> 
            </div>
        )                      
    }             
}

export default ParentComponent

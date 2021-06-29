import React, { Component } from 'react'
import UpdateComponent from './HocForCount'
 class Overcount extends Component {
   /*constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    increment=()=>
    {
            this.setState({


                count:this.state.count+1
            })



    } */

    render() {
        
    const{count,increment}=this.props
        return (
            <div>
                 <h2 onMouseOver={increment}>Hower {count}</h2>
            </div>
        )
    }
}

export default Overcount                           // UpdateComponent(Overcount,5) -for hoc

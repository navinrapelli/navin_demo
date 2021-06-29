import React, { Component } from 'react'
import UpdateComponent from './HocForCount'
 class Counter extends Component {
     /*constructor(props) {
         super(props)
     
         this.state = {
              count:0
         }
     }

     increment()
     {
         this.setState({     //current state
            
            count:this.state.count+1


          },()=>{console.log(this.state.count)})
          //this.setState(prevState=> ({
             // count:prevState.count+1
        //  }))

   }*/



     
     
    render() {
        const{count,increment}=this.props
        return (
            <div>
               Count={count}
               <button onClick={increment}  >increment</button>
            </div>
        )
    }
}

export default Counter              // UpdateComponent(Counter,2) fro hoc

import React, { Component } from 'react'

 class EventBinder extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message:"hello"
         }
     }

     messaagechane()
     {
         this.setState({
             message:"hello navin"
         })
     }
     
    render() {
        return (
            <div>
                 <button onClick={()=>this.messaagechane()}>Click</button>  
                 <div>{this.state.message}</div>
            </div>
        )
    }
}                        //four approches for binding the onclik even to the state
          // performance not good                 //onClick={this.messagechane.bind(this)}  binding method
    //its tourble in children but its simple                     //onClick={()=>this.messagechane()}  arrow function method
   //best approch                      //onClick={()=>this.messagechane}   and need to define this.messagechane=this.messagechane.blind(this)   //its will ussall approch and given in react documentioan
                         // change the messagecahne to arrow function 

export default EventBinder

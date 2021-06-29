import React, { Component } from 'react'

 class Conditions extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isloggedin:true
         }
     }


     
    render() {      

        //return this.state.isloggedin && <h1>welcome navin</h1>

        return(                      //conditional approch ternary conditonal approch
            this.state.isloggedin ? 
            <h1>welcome navin</h1>:
            <h1>welcome guest</h1>
        )
      /*  let message                     element variable method approch 
        if(this.state.isloggedin)     
        { 
             message= <h1>welcome navin</h1>

        }
        else{
               message=<h1>welcome guest</h1>
        } 

        return <div>{message}</div> */

      /*  if(this.state.isloggedin)      approch one if else 
        { 
             return <h1>welcome navin</h1>

        }
        else{
               return  <h1>welcome guest</h1>
        } */
        /*return (
            <div>
                
               
            </div>
        )*/
    }
}

export default Conditions

import React, { Component } from 'react'
import './DigitalClock.css'

 class DigitalClockf1 extends Component {
     constructor(props) {
         super(props) 

         const n=new Date();
         const day=n.toDateString()
         const time=n.toLocaleTimeString()
        
         
            this.state = {

               om:'',
              
                om1:time
          }        
         //this.changhandler=this.changhandler.bind(this)
     }
     componentDidMount() {
        this.intervalID = setInterval(
          () => this.tick(),
          1000
        );
      }
      componentWillUnmount() {
        clearInterval(this.intervalID);
      }
     
      tick() {
        const n=new Date();
        const time=n.toLocaleTimeString()
        this.setState({
          om1:time
        });
      }

     changhandler()

     {      
        const n=new Date();
        const day=n.toDateString()

        
              this.setState({
               om:day
                
        
            ,
            })    


     }

     nutralstate()
     {
         this.setState({

            om:''
         })
     }
     
     
    
    render() {
        return (
            <div className="clock">
                
                    <div id="one">
                        <h1>Digital Clock</h1>
                    </div>
                           <div id="three">
                             <label>Cick to See Date:</label>
                        <input type="checkbox" onClick={()=>{this.changhandler()}} onDoubleClick={()=>{this.nutralstate()}}></input>
                        </div>
                        <div id="two">
                            
                            <h1><span>Time= </span>{this.state.om1}</h1>
                            <h2>{this.state.om}</h2>
                        </div>
        
            </div>
            
        )
    }
}

export default DigitalClockf1

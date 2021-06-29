import React from 'react'

const UpdateComponent = (OldeComponent,incrementNumber)=>
{

   
    class HocForCount extends React.Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
   
        increment=()=>
        {
                this.setState({
    
    
                    count:this.state.count+incrementNumber
                })
    
    
    
        }
   
   
       render() {
           return (
               <div>
                      <OldeComponent count={this.state.count} increment={this.increment}/>
               </div>
           )
       }
   }
   
  return HocForCount
   


}

export default UpdateComponent

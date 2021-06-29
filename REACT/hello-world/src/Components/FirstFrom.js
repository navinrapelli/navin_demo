import React, { Component } from 'react'
import Namelist from './Namelist'
import './FromStyle.css'

export class FirstFrom extends Component {
    constructor(props) {
        super(props)
    
        this.state = {

            items:[],
            //usernmae:'',
               // comments:'',
                //topic:'',

            currentItem:{
            
                text:'',
                key:''

            },
            currentItem1:{
            
                text1:'',
                key1:''

            }
                  
        }

        this.ussrHandler=this.ussrHandler.bind(this);
        this.submithandler=this.submithandler.bind(this);
        this.deleteitem=this.deleteitem.bind(this);
    }
    ussrHandler=(event)=>
    {     
        this.setState({
              
            currentItem:{

                text:event.target.value,
                 
                key:Date.now()

            }

        })
         

    }
    commentsHandler=(event)=>
    {     
        this.setState({

            currentItem1:{
                text1:event.target.value,
                key1:Date.now()

            }
              
           

        })
         

    }
    toicHandler=(event)=>
    {     
        this.setState({

              currentItem:{

                topic:event.target.value,
                key:Date.now()

            }
        })

        
         

    }

    submithandler=(event)=>

    {           event.preventDefault();
          const newLtem=this.state.currentItem
          const newLtem1=this.state.currentItem1

          const p= {...newLtem,...newLtem1}
          console.log(p)
          console.log(newLtem1)
          if(newLtem!=="")
          {
                    const new1items=[...this.state.items,p];
                this.setState({
                     
                    items:new1items,
                    currentItem:{
                        
                        text:'',
                        key:'',
                        text1:'',
                        key1:''
                    },
                   

                })
          }

            
            /*let n=document.createElement('li');
            let b=document.createTextNode(this.state.mess);
            

            n.appendChild(b);
            b.appendChild(n);*/


        

            

    
           //alert(`${this.state.usernmae} ${this.state.comments} ${this.state.topic}`)

    }


    deleteitem(key)
    {

        const filteritem=this.state.items.filter(item=>
             
            item.key!==key
            
            );

            this.setState({
                
                items:filteritem
            })

            


    }
    render() {
        return (
            <form onSubmit={this.submithandler } className="firform">
                <div> 
                
                    <label>Name: </label>
                    <input type='text' value={this.state.currentItem.text}   onChange={this.ussrHandler}></input>
                </div>
                <br></br>
               <div>
                    <label>job:</label>
                    
                    <input type='text' value={this.state.currentItem.text1}   onChange={this.commentsHandler}></input>
                </div>

               {/* <div>
                    <select value={this.state.currentItem.topic } onChange={this.toicHandler}>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='vux'>Vux</option>
                    </select> 
               </div> */}

                <input type="submit" value="Submit" />
                
                <br></br>

                 
                
                    
                        <Namelist  items={this.state.items} deleteitem={this.deleteitem}/>
                             
                        
                     
            

            </form>
        )
    }
}

export default FirstFrom

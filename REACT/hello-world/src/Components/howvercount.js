import React, { Component } from 'react'

 class howvercount extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    incrementcount1=()=>
    {
            this.setState({


                count:this.state.count+1
            })



    }
    
    render() {
        return (
            <div>
                  <h>hower</h>
            </div>
        )
    }
}

export default howvercount

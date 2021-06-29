import React,{ Component } from 'react'
class Welcome extends Component{
    
   //here we can use like this const{name,heroname}=this.props its called distructuring using object props
    render()
    {
        return <h1> hello {this.props.name} chuitya {this.props.heroname}</h1>
    }                    //{name}                   {heroname}
}

export default Welcome
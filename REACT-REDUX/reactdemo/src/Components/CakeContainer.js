import React from 'react'
import{connect } from 'react-redux'
import{buyCake} from '../redux'


function CakeContainer(props) {
    return (
        <div>
               <h1>No of cake {props.numbeOfcake}</h1>
                <button  onClick={props.buyCake}>Buy cake</button>
        </div>
    )
}

const mapStateToprop= state =>{

 return{

    numbeOfcake: state.cake.numbeOfcake
 }


}

const mapDispatchToprop=dispatch=>{

    return{
      
        buyCake:()=> dispatch(buyCake())
       
    }
   
   
   }



export default connect(mapStateToprop,mapDispatchToprop)(CakeContainer)

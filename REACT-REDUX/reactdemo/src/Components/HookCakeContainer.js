import React from 'react'
import{useSelector,useDispatch} from 'react-redux'

import { buyCake } from '../redux'


function HookCakeContainer() {
    
const numbeOfcake = useSelector(state => state.cake.numbeOfcake)
const  dispatch = useDispatch()
    return (
        <div>
            <h1>No of cakes hook-{numbeOfcake}</h1>
            <button onClick={()=>dispatch(buyCake())}>Buy cake</button>
            
        </div>
    )
}

export default HookCakeContainer



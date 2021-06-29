import React from 'react'
import{useSelector,useDispatch} from 'react-redux'

import { buyIce } from '../redux'


function HookICEContainer() {
    
const numbeOfice = useSelector(state => state.ice.numbeOfice)
const  dispatch = useDispatch()
    return (
        <div>
            <h1>No of IceCream hook-{numbeOfice}</h1>
            <button onClick={()=>dispatch(buyIce())}>Buy IceCream</button>
            
        </div>
    )
}

export default HookICEContainer
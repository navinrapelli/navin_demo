import{BUY_ICE} from './iceTypes'

const initailstate={


    numbeOfice:20
}

const iceReducer=(state=initailstate,action)=>{

switch(action.type)   
{
     case BUY_ICE:return{
         ...state,
         numbeOfice: state.numbeOfice -1
     }
   
     default: return state

}

}

export default iceReducer
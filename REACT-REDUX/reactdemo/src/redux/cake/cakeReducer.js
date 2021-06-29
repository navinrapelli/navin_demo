import{BUY_CAKE} from './cakeTypes'

const initailstate={


    numbeOfcake:10
}

const cakeReducer=(state=initailstate,action)=>{

switch(action.type)   
{
     case BUY_CAKE:return{
         ...state,
         numbeOfcake: state.numbeOfcake -1
     }
   
     default: return state

}

}

export default cakeReducer
 const redux =require('redux')
 const reduxLogger=require('redux-logger')
 

const createStore=redux.createStore
const logger=reduxLogger.createLogger
const applyMiddleware=redux.applyMiddleware

const BUY_CAKE='BUY_CAKE'

function bycake(){
 
  return{
     type:BUY_CAKE,
     info:'firs cation'
  }
}

const initalstate={

     numberofcake:10
}

const reducer= (state = initalstate, action)=>{

   switch(action.type){
      case BUY_CAKE:return{

        ...state,

        numberofcake: state.numberofcake-1
      }

      default:
           return state
    
    }

}
const store=createStore(reducer,applyMiddleware(logger))  //holds the reducer or application state
console.log('inital state',store.getState())
 const unsubsribe =store.subscribe(()=>{})
store.dispatch(bycake())
store.dispatch(bycake())
store.dispatch(bycake())
unsubsribe()
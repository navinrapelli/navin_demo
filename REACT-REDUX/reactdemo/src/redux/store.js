import thunk from 'redux-thunk'
import {createStore,applyMiddleware} from  'redux'
import cakeReducer from './cake/cakeReducer'
import iceReducer from  './IceCream/iceReducer'
import rootReducer from './rootReducer'

const store=createStore(rootReducer,(applyMiddleware(thunk)))

export default store

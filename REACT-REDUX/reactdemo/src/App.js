//import logo from './logo.svg';

import React from 'react'
import { Provider} from 'react-redux'
import store from './redux/store'
import './App.css';

import CakeContainer from './Components/CakeContainer'
import HookCakeContainer from './Components/HookCakeContainer';
import HookICEContainer from './Components/IceContainer';
import UserContainer from './Components/UserContainer';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
    { /*<CakeContainer/>
     <HookCakeContainer/>
     <HookICEContainer/>*/}
     <UserContainer/>
    </div>
    </Provider>
  );
}

export default App; 

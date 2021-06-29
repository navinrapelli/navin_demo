//import logo from './logo.svg';
import './App.css';
//import Greet from './Components/Greet'
//import Welcome from './Components/Welcome'
//import Message from './Components/Message'//
import Counter from './Components/Counter';
import EventBinder from './Components/EventBinder';
import ParentComponent from './Components/ParentComponent';
import Conditions from './Components/Conditions';
import Namelist from './Components/Namelist';
import Personlist from './Components/Personlist';
import Stylesheet from './Components/Stylesheet';
import Inline from './Components/Inline';
import FirstFrom from './Components/FirstFrom';
import AssignmenetQ2 from './Components/AssignmenetQ2'
import DigitalClock from './Components/DigitalClock'
import DigitalClockf1 from './Components/DigitalClockf1'
import PureCompon from './Components/PureCompon'
import howvercount from './Components/howvercount'
import  Overcount from './Components/Overcount'
import RenderProps from './Components/RenderProps'
import {BrowserRouter as Router,Link} from 'react-router-dom'
import Route from 'react-router-dom/Route'
import Router12 from './Components/Router12';


/*const User=({match})=>
{
  return <h1> U Select  {match.params.username}</h1>
}*/
function App()  {
  
  return (
    <Router>
    <div className="App">
      
     <Router12/>

                
    
     {/*<Route path="/user/:username" exact component={User}/>*/}
    

     {/* <RenderProps render={(count,increment)=><Counter count={count} increment={increment}/>}/>
      
      <RenderProps render={(count,increment)=><Overcount count={count} increment={increment}/>}/>*/}
        {/*<Overcount/>*/}
       {/*<PureCompon/>*/}
    {/*<DigitalClockf1/>*/}
     {/* <DigitalClock/> */}
      {/*<AssignmenetQ2/>?*}
      {/*<FirstFrom/>*/}
      {/*<Inline/>*/}
      {/*<Stylesheet primary={true}/>*/}
      { /*<Personlist/>*/}
      {/*<Namelist/> */}
      {/*<Conditions/>*/}
      {/*<ParentComponent/>*/}
         {/*<EventBinder/>*/}
         {/*<Counter/>*/}
         
      {/*<Message/>*/}
      
     { /* <Greet name="Navin" heroname="superman" >
          <p>i am superman</p>
         </Greet>
       <Greet name="Venky" heroname="batman" >
         <button>navin</button>
       </Greet>
       <Greet name="Pavan" heroname="ironman"/>
       <Welcome name="Naga"heroname="asha" />*/}
    </div>
    
    </Router>
  );
}

export default App;

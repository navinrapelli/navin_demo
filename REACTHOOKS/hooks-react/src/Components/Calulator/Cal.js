import React from 'react'
import{useState,useEffect,useRef} from 'react'
import './Cal.css'

function App1() {
    
    const [result,setResult]=useState('');
    const inputRef = useRef(null);

     useEffect(()=>inputRef.current.focus());

     function handClick(e){
         
      setResult(result.concat(e.target.name));
     }

     function backspace()
     {
       setResult(result.slice(0,result.length-1))
     }

     function Clear()
     {
       setResult('')
     }

     function Calculate(){

        try{
          //setResult(eval(result).toString());
        } catch(error)
        {
                setResult("Error");
        }

     }
   
  
    return (
      <div className="Cal-App">

          <h1>Calculator</h1>
        <form>
              <input type="text" id="result" value={result}  ref={inputRef}/>   
              
          
        </form>
        <div className="keypad">
          <button onClick={Clear} id="clear">Clear</button>
          <button onClick={backspace} id="backspace">C</button>
          <button name="+" onClick={handClick}>+</button>
          <button name="7" onClick={handClick}>7</button>
          <button name="8" onClick={handClick}>8</button>
          <button name="9" onClick={handClick}>9</button>
          <button name="-" onClick={handClick}>-</button>
          <button name="6" onClick={handClick}>6</button>
          <button name="5" onClick={handClick}>5</button>
          <button name="4" onClick={handClick}>4</button>
          <button name="*" onClick={handClick}>*</button>
          <button name="3" onClick={handClick}>3</button>
          <button name="2" onClick={handClick}>2</button>
          <button name="1" onClick={handClick}>1</button>
          <button name="/" onClick={handClick}>/</button>
          <button name="0" onClick={handClick}>0</button>
          <button name="." onClick={handClick}>.</button>
          <button onClick={Calculate} id="result">Result</button>

        </div>
      </div>
    );
  }
  
  export default App1;
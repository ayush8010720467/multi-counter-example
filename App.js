import './App.css';
import Counter from './counter/counter';
import Button from './Button'
import { useState } from 'react';

function App() {
  const [counter,updateCounter] = useState([]);
  const resetArr = [];
  const appendcard = ()=>{
    if(counter.length ===0){
      updateCounter([{0:0}])
    }
    else{
      updateCounter([...counter,{[counter.length]:0}]);
    }
    
  }
  const getResetFunc = (func)=>{
    resetArr.push(func);
  }
  const getCounters = ()=>{
    // console.log('called')
    return counter.map((elem,index)=>{
      // console.log(elem[index],index)
      return <li className="list" key={index}><Counter getResetFunc={getResetFunc}>{elem[index]}</Counter></li>
    })
  }
  
  const reset = ()=>{
    resetArr.forEach((elem)=>{
      elem();
    })
  }
  return (
    <div className="App">
      <header className="App-header">
      <Button styling="createBtn" performOp={appendcard}>
        +
      </Button>
      {counter.length>0?<Button styling="resetButton" performOp={reset}>Reset</Button>:<></>}
      <ul>
        {getCounters()}
      </ul>
      
      
      </header>
    </div>
  );
}

export default App;

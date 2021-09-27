import './App.css';
import Counter from './counter/counter';
import Button from './Button'
import { useState } from 'react';

function App() {
  const [counter,updateCounter] = useState([]);
  const appendcard = ()=>{
    if(counter.length ===0){
      updateCounter([{0:0}])
    }
    else{
      updateCounter([...counter,{[counter.length]:0}]);
    }
    
  }
  const getCounters = ()=>{
    console.log('called')
    return counter.map((elem,index)=>{
      return <li className="list" key={index}><Counter>{elem[index]}</Counter></li>
    })
  }
  
  return (
    <div className="App">
      <header className="App-header">
      <Button styling="createBtn" performOp={appendcard}>
        +
      </Button>
      
      <ul>
        {getCounters()}
      </ul>
      
      
      </header>
    </div>
  );
}

export default App;

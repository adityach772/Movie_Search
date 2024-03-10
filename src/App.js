import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [counter,setCounter] = useState(0);
  //useEffect(() => {alert("you have changed counter to" + counter)}, [counter]);
  const decrement = () => {setCounter(counter-1)}
  const increment = () => {setCounter(counter+1)}

  return (
    <div className="App">
      <button onClick={decrement}>-</button>
      <h1>{counter}</h1>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;

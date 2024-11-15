import { useState } from 'react'

import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  //let counter = 15;

  const addValue = () => { 
    counter=counter+1 ;
    setCounter(counter)
    //console.log("working",Math.random());
  }

  const removeValue = () => { 
    if(counter!==0){
      counter=counter-1 ;
  }else{
      counter==0;
  }
    setCounter(counter)
    //console.log("working",Math.random());
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button><br/>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App

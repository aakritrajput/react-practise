import { useState } from 'react'

import './App.css'

function App() {  

  let [counter, setCounter] = useState(15)

  //let counter = 15;

  const addValue = () => { 
    counter=counter+1 ;
    setCounter(prevCounter=>prevCounter+1)     // what will happen ? result?
    setCounter(prevCounter=>prevCounter+1)     //its the story of useState(15) ..it send all the updates to ui and variables in batches (fibre(diffing algorithm) concept which give more control over batches)
    setCounter(prevCounter=>prevCounter+1)     //so setCounter is a function and it recieve a callback which is its previous state (not talking about UI) and then can apply the required condition ... as given
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
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

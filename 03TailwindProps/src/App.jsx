import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'


function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username:'aakrit',
    age:78
  }

  return (
    <>
       <Card  myArr={myObj} username='aakrit' color='bg-red-800'/>
       <Card username='rishu' color='bg-amber-700'/>
       <Card username='komal' color='yellow'/>
       
    </>
  )
}

export default App

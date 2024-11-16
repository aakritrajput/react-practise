import { useState } from 'react'

import './App.css'
import Card from './components/card'


function App() {
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

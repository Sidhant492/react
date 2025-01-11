import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let[counter, setCounter]= useState(15)
  const addValue= ()=>{
    if(counter<20){
      counter= counter+1;
    setCounter(counter)
    }
    
  }
  const subValue= ()=>{
    if(counter>0){
      counter= counter-1;
    setCounter(counter)
    }
    
  }
  return (
    <>
      <h1>This is the basic things</h1>
      <h2>The value of counter is {counter}</h2>
      <button onClick={addValue}>Add</button>
      <br/>
      <button onClick={subValue}>Sub</button>
    </>
  )
}

export default App

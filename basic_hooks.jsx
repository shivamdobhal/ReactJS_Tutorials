import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter=1

  let [counter,SetCounter]=useState(1)          //hook
const incre = () => {
    if(counter<20)
   { counter++;
    SetCounter(counter);
    // console.log("current value-->",counter);
   }
  }

const decre = () =>
  {
    if(counter>0)
      {
    counter--;
    SetCounter(counter);
    // console.log("current value-->",counter);
      }
  }
  
  return (
    <>
     <h1>getting started with react + vite by shivam</h1>
     <h2>counter= {counter}</h2>
     <button onClick={incre}>Increment:{counter}</button>
     <br></br>
     <br></br>
     <button onClick={decre}>Decrement:{counter}</button>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter , setCounter] =useState(0)
 // let counter =5
 const addValue =()=> {
  if (counter)
  counter=counter+1
 setCounter(counter)
 }

 const removeValue =()=> {
 // we donot want to make the value of counter as negative
 if (counter>0){ counter=counter-1
setCounter(counter)}
else {setCounter(counter=0)}
}

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value :{counter}</h2>
      <button
       onClick={addValue}
      >Add value{counter}</button>
      <br/>
      <button onClick ={removeValue}>Remove value{counter}</button>
       
    </>
  )
}

export default App

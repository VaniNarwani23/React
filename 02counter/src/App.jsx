import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Counter,setCounter] = useState(15)
  // let Counter= 15
  const addValue = () => {
    // Counter= Counter + 1
    setCounter(Counter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)
    setCounter(prevCounter => prevCounter+1)

    // console.log("value added",Counter)
  }

  const removeValue = () => {
    setCounter(Counter-1 )
  }

  return (
    <>
      <h1> Welcome to My React Webpage</h1>
      <h2>Counter Value  : {Counter} </h2>
      <button onClick={addValue}>Add The Value : {Counter}</button>
      <button onClick={removeValue}>Remove The Value : {Counter}</button>
      <p>footer:{Counter}</p>
    </>
  )
}

export default App

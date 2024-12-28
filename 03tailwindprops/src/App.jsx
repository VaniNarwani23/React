import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/card'

function App() {
  const [count, setCount] = useState(0)
  let Myobj = {
  username : 'Vani' , 
  age: 18 
  }
  let newArr = [1,2,3,4]
  return (
    <>
      <h1 className='bg-pink-400 text-black p-4 rounded-xl mb-4' >Tailwind Test</h1>
      <Card channel = "vanireact" someObj={newArr} username="Vani" Btntext = "Click Here"/>
      <Card username = "Hello"  Btntext = "Click Here"/>
    </>
  )
}

export default App

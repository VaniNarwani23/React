import { useState  ,useCallback} from 'react'
import './App.css'
import { comma } from 'postcss/lib/list'
import { use } from 'react'

function App() {
   const [length, setLength] = useState(8)
   const [numberAllowed,SetNumberAllowed ] = useState(false)
   const [charAllowed ,setCharAllowed] = useState(false)
   const [password,setPassword] = useState("")
   const passwordGenerator = useCallback (() =>{
    let pass = ""
    let str = ""
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+~`| "
    for (let i = 0; i <= Array.length; i++) {
      let char = Math.floor(Math.random() * str.length+1)
      path= str.charAt(char)
    }
    setPassword(pass)
    } , [length,numberAllowed,charAllowed,setPassword])

  return (
    <>
  <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4   py-3 my-8 text-black-400 bg-gray-500" >  
      <h1 className="text-white text-center mb-2"> Password Generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input type='text' 
       value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="Here is your Password"
        readOnly/>
        <button className="outline-none bg-pink-600 text-black px-3 py-0.5 shrink-0">Copy</button>
    </div>
      <div className="flex test-sm gap-x-2 ">
        <div classname="flex items-center gap-x-1 "> 
          <input
          type='range'
          min={6}
          max={100}
          value = {length}
          classname='cursor pointer'
          onChange={(e)=> {setLength(e.target.value)}}

          /> 
          <label> Length : {length} </label>
          </div>
      </div>
</div>
    
  </>
)
}
export default App

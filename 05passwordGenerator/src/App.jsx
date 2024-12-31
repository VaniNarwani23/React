import { useState  ,useCallback,useEffect, useRef} from 'react'
import './App.css'
// import { comma } from 'postcss/lib/list'
// import { use } from 'react'


function App() {
   const [length, setLength] = useState(8)
   const [numberAllowed,SetNumberAllowed ] = useState(false)
   const [charAllowed ,setCharAllowed] = useState(false)
   const [password,setPassword] = useState("")

    const passwordRef=useRef(null)

   const passwordGenerator = useCallback (() =>{
    let pass = ""
    let str = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+~`| "
   
    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length+1)
      pass+= str.charAt(char)
    }
    setPassword(pass)


    } , [length,numberAllowed,charAllowed,,setPassword])

    const copyPasswordToClipboard = useCallback(() => {
      passwordRef.current?.select()
      // passwordRef.current?.setSelectionRange(0,97)
      window.navigator.clipboard.writeText(password)

    },[password])

    useEffect(() => {
      passwordGenerator()
    }, [length,numberAllowed,charAllowed, passwordGenerator])



   
        

  return (
    <>
  
   
  <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4  py-3 my-8 text-black-400 bg-gray-500" >  
      
  <h1 className="animated-h1 text-white font-serif font-extrabold text-2xl text-center mb-1 "> Password Generator</h1> 
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input type='text' 
       value={password}
        className="outline-none w-full py-1 px-3"
        placeholder="Here is your Password"
        readOnly
        ref={passwordRef}
        />
       
        <button onClick={copyPasswordToClipboard}
        className="outline-none bg-pink-600 text-black px-3 py-0.5 shrink-0">Copy</button>
    </div>
      <div className="flex test-sm gap-x-2 ">
        <div classname="flex items-center gap-x-1 mb-1"> 
          <input
          type='range'
          min={4}
          max={100}
          value = {length}
          classname='cursor pointer'
          onChange={(e)=> {setLength(e.target.value)}}

          /> 
          <label> Length : {length} </label>
          </div>
          <div className="flex items-center gap-x-1 ">
            <input
            type='checkbox'
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={()=>{
              SetNumberAllowed((prev) => ! prev);

            }}
            />
            <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-1 ">
            <input
             type='checkbox'
             defaultChecked={charAllowed}
             id='characterInput'
             onChange={()=>{
               SetcharAllowed((prev) => ! prev);
             }}
             />
              <label htmlFor="numberInput">Characters</label>
          </div>
      </div>
</div>
    
  </>
)
}
export default App

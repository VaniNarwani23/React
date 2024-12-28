import {useState} from "react"
function App() {
  const [color, setColor] = useState("teal")


  return (
    <div className="w-full h-screen duration-200 " style = {{backgroundColor:color}}>
     <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
     <div className = "flex flex-wrap  justify-center gap-3 shadow-lg bg-white text-white  px-3 py-2 rounded-3xl">
     <button onClick={() => setColor("red")}
      className="outline-none px-4 py-1 rounded-full text-red-600 shadow-lg font-sans " style={{backgroundColor:"black"}}> Red </button>
     <button onClick={() => setColor("yellow")}
      className="outline-none px-4 py-1 rounded-full text-yellow-400 shadow-lg " style={{backgroundColor:"black"}}> Yellow </button>
     <button onClick={() => setColor("Pink")}
      className="outline-none px-4 py-1 rounded-full text-pink-700 shadow-lg >"style={{backgroundColor:"black"}}> Pink </button>
           <button onClick={() => setColor("Maroon")}
      className="outline-none px-4 py-1 rounded-2xl text-rose-900 shadow-lg >"style={{backgroundColor:"black"}}> Maroon  </button>
     </div>
    </div>
    </div>
  )
}

export default App

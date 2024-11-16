
import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")


  return (
    <>
      <div className=" min-h-[100vh] min-w-[100vw] flex items-end justify-center py-10" style={{backgroundColor:color}}  >
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5">
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
             <button onClick={()=>setColor("red")} className=" outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: "red"}}>Red</button>
            </div>
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
             <button onClick={()=>setColor('green')} className=" outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: "green"}}>Green</button>
            </div>
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
             <button onClick={()=>setColor('yellow')} className=" outline-none px-4 py-1 rounded-full shadow-lg text-black" style={{backgroundColor: "yellow"}}>Yellow</button>
            </div>
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
             <button onClick={()=>setColor('blue')} className=" outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: "blue"}}>Blue</button>
            </div>
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
             <button onClick={()=>setColor('black')} className=" outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: "black"}}>black</button>
            </div>
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
             <button onClick={()=>setColor('white')} className=" outline-none px-4 py-1 rounded-full shadow-lg text-black" style={{backgroundColor: "white"}}>White</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [color , set_color] = useState("black")

  return (
    <div className='w-full h-screen' style={{backgroundColor: color}}>
      <div className=' grid place-items-center h-screen'>
        <h1 className='flex flex-wrap text-white mt-50 mb-0 font-bold text-3xl'>PRESS ANY BUTTON TO CHANGE COLOR OF THE SCREEN</h1>
        <div className='mb-50 flex flex-wrap justfy-center  gap-5 shadow-2xl bg-pink-100 rounded-2xl p-2'>
          <button onClick={()=> set_color("#31044C")} className='bg-violet-950 px-2 py-1 text-white rounded-2xl'>Violet</button>
          <button onClick={()=> set_color("#141896")} className='px-2  py-1 bg-blue-700 text-white rounded-2xl'>Blue</button>
          <button onClick={()=> set_color("#64b5f6")} className='px-2  py-1 bg-blue-300 rounded-2xl'>Sky Blue</button>
          <button onClick={()=> set_color("#2f855a")} className='px-2  py-1 bg-green-700 text-white rounded-2xl'>Green</button>
          <button onClick={()=> set_color("#FFEB3B")} className='px-2  py-1 bg-yellow-500 rounded-2xl'>Yellow</button>
          <button onClick={()=> set_color("#ff9800")} className='px-2  py-1 bg-orange-500 rounded-2xl'>Orange</button>
          <button onClick={()=> set_color("#d32f2f")} className='px-2  py-1 bg-red-700 rounded-2xl'>Red</button>
          <button onClick={()=> set_color("white")} className='px-2  py-1 bg-white rounded-2xl'>White</button>
          <button onClick={()=> set_color("black")} className='px-2  py-1 bg-black text-white rounded-2xl'>Black</button>
        </div>
      </div>
    </div>
  )
}

export default App

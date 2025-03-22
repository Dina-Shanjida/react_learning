import { useState , useCallback , useEffect , useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length , set_length] = useState(8)
  const [take_num , set_take_num] = useState(false)
  const [take_char , set_take_char] = useState(false)
  const [password , set_password] = useState("")

  const pass_generate = useCallback(()=>{
    let pass = ""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if(take_num) str+= "0123456789"
    if(take_char) str+= "!@#$%^&*_-+[];',./>?}{)("

    for(let i = 0 ; i < length ; i++){
      let char = str[Math.floor(Math.random() * str.length + 1 )]
      pass += char
    }

    set_password(pass)

  }, [length, take_char , take_num , set_password]) 

  useEffect(() => {
    pass_generate()
  }, [length, take_char, take_num , pass_generate])

  const copy_password = useCallback(() => {
    password_ref.current?.select()
    window.navigator.clipboard.writeText(password)
  } , [password])

  const password_ref = useRef(null)

  return (
    <>
      <div>
        <h1 className='text-6xl fond-bold text-center bg-white p-6 ' >Password Generator</h1>
        <div className='mx-auto text-center'>
          <input 
          type="text" 
          placeholder='Generated Password'
          className='w-100 bg-amber-200 text-center rounded-3xl mt-6 p-3 text-red-700 '
          value={password}
          readOnly
          ref={password_ref}
          />
          <button onClick={copy_password}
          className='bg-amber-400 w-20 rounded-3xl mx-1 mt-6 p-3 font-bold '>Copy </button>
        </div>


        <div className='mx-auto text-center'>
        <label htmlFor="range" className='mx-3'>Length: {length}</label>
          <input 
          id='range'
          type="range"
          min={8}
          max={30}
          value={length}
          className='cursor-pointer mt-4' 
          onChange={(e)=> set_length(e.target.value)}
          /> 
        </div>

        <div className='mx-auto text-center'>
          <label htmlFor="take_num">Add Number</label>
          <input 
          type="checkbox"
          defaultChecked={take_num}
          id='take_num'
          className='mx-4 size-4'
          onChange={()=> set_take_num((prev) => !(prev))}

          />

          <label htmlFor="take_char">Add Character</label>
          <input 
          type="checkbox"
          defaultChecked={take_char}
          id='take_char'
          className='mx-4 size-4'
          onChange={()=> set_take_char((prev) => !(prev))}
          />

        </div>
      </div>
    </>
  )
}

export default App

import { useState , useContext, useEffect} from 'react'
import './App.css'
import { To_Do_Provider } from './Contexts/To_Do_Context'
import Todo_form from './Components/Todo_form'
import Todo_item from './Components/Todo_item'

function App() {
  const [todos , set_todos] = useState([])

  const add_todo = (todo) => {
    set_todos((prev) => [{id: Date.now() , ...todo},...prev])
  }

  const update_todo = (id , todo) => {
    set_todos((prev) => prev.map((prev_todo) => (prev_todo.id === id ? todo : prev_todo)))
  }

  const delete_todo = (id) => {
    set_todos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggle_complete = (id) => {
    set_todos((prev) => prev.map((prev_todo) => prev_todo.id === id ? {...prev_todo , completed: !prev_todo.completed} : prev_todo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length){
      set_todos(todos)
    }
  } , [])

  useEffect(() => {
    localStorage.setItem("todos" , JSON.stringify(todos))
  } , [todos])
  
  return (
    <To_Do_Provider value={{todos, add_todo , update_todo , delete_todo , toggle_complete}}>
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
              {/* Todo form goes here */} 
              <Todo_form />
          </div>
          <div className="flex flex-wrap gap-y-3">
               {/*Loop and Add TodoItem here */}
               {todos.map((todo) => (
                <div key= {todo.id} className='w-full'>
                  <Todo_item todo = {todo} />
                </div>
               ))}
          </div>
      </div>
    </div>
    </To_Do_Provider>
  )
}

export default App

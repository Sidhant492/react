import { useState ,useEffect} from 'react'
import {ToDoProvider} from './context'
import './App.css'
import { Todoform, TodoItem } from './components';

function App() {
  const [todos,setTodos]= useState([]); //State to hold todos
  const addTodo= (todo)=>{ 
    setTodos((prev)=>[{id:Date.now().toString(),...todo},...prev])
    // todos.map((todo)=>(
    //   console.log("The todos are:",todo)
    // ))
  }
  const updateTodo= (id,todo)=>{
    setTodos((prev)=>prev.map((t)=>t.id===id?todo:t))
  }
  const delelteTodo= (id)=>{
    setTodos((prev)=>prev.filter((t)=>t.id!==id))
  }
  const toggleComplete= (id)=>{
    setTodos((prev)=>prev.map((t)=>t.id===id?{...t,completed:!t.completed}:t))
  } 

  useEffect(()=>{ 
    const todos= JSON.parse(localStorage.getItem("todos"))//gives string data need to parse in json
    if(todos&& todos.length > 0){
      setTodos(todos) 
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])

  return (
    <>
    <ToDoProvider value= {{todos,addTodo,updateTodo,delelteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                        <Todoform/> 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id}
                          className='w-full'>
                            <TodoItem todo= {todo}/>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </ToDoProvider>
    </>
  )
}

export default App

import React from 'react'
import { useToDo } from '../context';
import {useState} from 'react'

function Todoform() {
    const [todo,setTodo] = useState("")
    const {addTodo}= useToDo()

    const add= (e) =>{
        // Console.log("The event is :" ,e)
        e.preventDefault()
        if(!todo)return 
        console.log("the value of todo is :",todo)
        addTodo({todo, completed:false})
        setTodo('')
    }
    

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default Todoform;

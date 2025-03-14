import{createContext,useContext} from "react";


export const ToDoContext=  createContext({
    todos:[
        {
            id:"1",
            todo:"Todo Msg",
            completed:false,
        }
    ],
    addTodo : (todo)=>{},
    updateTodo: (id,todo)=>{},
    delelteTodo: (id)=>{},
    toggleComplete: (id)=>{}

})


export const useToDo= ()=>{
    return useContext(ToDoContext)
}

export const ToDoProvider= ToDoContext.Provider 
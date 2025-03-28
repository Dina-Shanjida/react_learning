import { createContext , useContext } from "react";

export const To_Do_Context = createContext({
    todos: [
        {
            id: 1,
            todo: "todo task",
            completed: false
        } 
    ],
    add_todo: (todo) => {},
    update_todo: (id , todo) => {},
    delete_todo: (id) => {},
    toggle_complete: (id) => {},
})

export const Use_To_Do = () => {
    return useContext(To_Do_Context)
}

export const To_Do_Provider = To_Do_Context.Provider
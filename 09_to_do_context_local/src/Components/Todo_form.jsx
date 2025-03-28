import React, { useState } from "react";
import { Use_To_Do } from "../Contexts/To_Do_Context";

export default function Todo_form() {

    const [todo , set_todo] = useState("")

    const {add_todo} = Use_To_Do()

    const add = (e) => {
        e.preventDefault()
        
        if(!todo) return
        else add_todo({ todo, completed: false})
        set_todo("")
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => set_todo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}
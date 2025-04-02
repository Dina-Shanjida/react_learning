import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
    // Fix: Ensure the slice name matches your Redux store
    const todos = useSelector((state) => state.todos);  
    const dispatch = useDispatch();

    return (
        <>
            <div>Todos</div>
            <ul>
                {todos && todos.length > 0 ? (
                    todos.map((todo) => (
                        <li key={todo.id}>
                            <div className="bg-amber-200 text-black">{todo.text}</div>
                            <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                        </li>
                    ))
                ) : (
                    <p>No todos available.</p>
                )}
            </ul>
        </>
    );
}

export default Todos;

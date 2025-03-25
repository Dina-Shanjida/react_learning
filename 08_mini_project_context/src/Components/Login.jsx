import React from "react";
import { useState , useContext} from "react";
import User_Context from "../Context/User_Context";

export default function Login(){

    const [user_name , set_user_name] = useState("")

    const [password , set_password] = useState("")

    const {set_user} = useContext(User_Context)


    const handle_submit = (e) => {
        e.preventDefault()
        set_user({user_name, password})
    }


    return(
        <>
        <div>
            <h2>Login</h2>
            <input 
            value={user_name}
            onChange={(e) => set_user_name(e.target.value)}
            type="text" placeholder="Username" />
            <input 
            value={password}
            onChange={(e) => set_password(e.target.value)}
            type="password" placeholder="Password" />
            <button onClick={handle_submit}>Submit</button>
        </div>
        </>
    )
}
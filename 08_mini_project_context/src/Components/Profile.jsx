import React from "react";
import { useContext } from "react";
import User_Context from "../Context/User_Context";

export default function Profile(){

    const {user} = useContext(User_Context)

    if(!user) return <div>Please login first</div>

    else return(
        <>
        <div>Welcome {user.user_name}</div>
        </>
    )
}
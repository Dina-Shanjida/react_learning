import React from "react";
import { useParams } from "react-router-dom";
import {Link , NavLink} from "react-router-dom" 

export default function User(){

    const {userid} = useParams()
    return(
        <>
            <div className="mx-auto text-center p-6 font-bold text-4xl bg-amber-700">User: {userid}</div>
        </>
    )
}
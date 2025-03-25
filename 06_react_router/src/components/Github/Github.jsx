import React, { useEffect, useState } from "react";
import {Link , NavLink , useLoaderData} from "react-router-dom" 


export default function Github(){

    const data = useLoaderData()

    // const [data , set_data] = useState({})

    // useEffect(()=>{
    //     fetch("https://api.github.com/users/dina-shanjida")
    //     .then(response => response.json())
    //     .then(data => set_data(data))
    // }, [])


    return(
        <>
        <div className="mx-auto text-center p-6 font-bold text-4xl bg-amber-700">{data.login}'s Github Followers: {data.followers}
        </div>
        <img className="mx-auto text-center" src={data.avatar_url} alt="" />
        
        </>
    )
}

export const Github_info_loader = async() => {
    const response = await fetch("https://api.github.com/users/dina-shanjida")
    return response.json()
}

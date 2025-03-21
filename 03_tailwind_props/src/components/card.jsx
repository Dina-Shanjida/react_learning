import React from 'react'

function Card({avaibilty = "you forgot to pass the props:(("}){
    return(
        <>
        <div className=" rounded-xl">
        <img
          src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
          alt="Giphy"
          className="rounded-t-4xl"
        />
        <div className="glass py-4 px-5 relative -top-[3.4rem]  rounded-b-xl z-10 m-10">
          <h1 className="font-bold  font-mono  text-xl">{avaibilty}</h1>
        </div>
        </div>
        </>
    )
}

export default Card
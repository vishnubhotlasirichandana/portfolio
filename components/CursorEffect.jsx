"use client";

import { useEffect,useState } from "react";

export default function CursorEffect(){

const [position,setPosition]=useState({x:0,y:0})

useEffect(()=>{

const move=(e)=>{

setPosition({

x:e.clientX,
y:e.clientY

})

}

window.addEventListener("mousemove",move)

return()=>window.removeEventListener("mousemove",move)

},[])

return(

<>

<div

className="fixed pointer-events-none z-50
w-10 h-10 rounded-full
bg-cyan-400/40 blur-xl"

style={{

left:position.x-20,
top:position.y-20

}}

></div>

<div

className="fixed pointer-events-none z-50
w-4 h-4 rounded-full bg-white"

style={{

left:position.x-8,
top:position.y-8

}}

></div>

</>

)

}
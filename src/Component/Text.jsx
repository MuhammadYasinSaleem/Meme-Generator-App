import React,{useState} from "react";
import Draggable from "react-draggable"

const Text=()=>{
    const [editmode,seteditmode]=useState(false)
    const [val,setval]=useState("Double Click to Edit")
    return(
        <Draggable>
       {
        editmode? <input 
        onDoubleClick={(e)=>seteditmode(false)}
        value={val} onChange={e=>setval(e.target.value)}/>:
        <h1 onDoubleClick={e=>seteditmode(true)}>{val}</h1>
       }
        </Draggable>
    )
}

export default Text
import { Button } from "react-bootstrap";
import React from "react";
import { useSearchParams } from "react-router-dom";
import { useState,createRef } from "react";
import Text from "../Component/Text";
import {exportComponentAsJPEG} from "react-component-export-image"
const EditPage=()=>{

    const [params]=useSearchParams();
const [count,setcount]=useState(0)
const memeRef=createRef()
    const Addtext=()=>{
setcount(count+1)
    }
    return(
        <div>
        <div style={{width:"700px"}} ref={memeRef} className="meme mt-5 mb-5" >
<img src={params.get("url")} alt="pic" width="250px"/>
{
    Array(count).fill(0).map((e)=><Text/>)
}
        </div>
        <Button onClick={()=>Addtext()}>Add Text</Button>
        <Button onClick={(e)=>exportComponentAsJPEG(memeRef)} variant="success">Save</Button>
        </div>
    )
}

export default EditPage
import React from "react";
import MemeCard from "../Component/Card";
import { useEffect,useState } from "react";
import { Getmemedata } from "../Api";

const Home=()=>{
    const [memes,setMemes]=useState([]);
    useEffect(()=>{
Getmemedata().then(data=>setMemes(data.data.memes))
    })
    return(
        <div className="row">
      {
        memes.map((e,i)=><MemeCard key={i} img={e.url} title={e.name}/>)
      }
       </div>
    )
}

export default Home
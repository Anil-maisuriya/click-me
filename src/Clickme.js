import React, { useState } from "react";
import './Clickme.css';

function Click(){

   let time= new Date().toLocaleTimeString();

   const [newTime,setnewTime]=useState(time);

   let update=()=>{
    let time= new Date().toLocaleTimeString();
    setnewTime(time);
 }

 setInterval((update), 1000);

  let red= "rgb(84, 177, 171)";
  let btc= "rgb(226, 43, 119)"
  const [bg,setbg]=useState(red)
  const [bg2,setbg2]=useState(btc)
  const [name,setname]=useState("Click me!!!")

 let changebg=()=>{
     let newbg= "gray"
     let newbg2="tomato"
     setbg(newbg)
     setname("Double click!!!")
     setbg2(newbg2)
    }
    
    let oldbg=()=> {
        let red= "rgb(84, 177, 171)";
        let btc= "rgb(226, 43, 119)"
        setbg(red)
        setname("Click me!!!")
        setbg2(btc)
};
 


    return(
        <>
            <div style={{backgroundColor: bg}}>
            <h1>{newTime}</h1>
            <button style={{backgroundColor: bg2}} onClick={changebg} onDoubleClick={oldbg} >{name}</button>
            </div>
            
       </>
    );
}

export default Click;
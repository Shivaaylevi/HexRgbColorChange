import React, { useEffect, useState } from 'react'
import "./color.css"
const Color = () => {
    const[color,setColor]=useState("#00000")
    const[typeofcolor,setTypeofcolor]=useState("hex")
    const handleRandom=(len)=>{
        return Math.floor(Math.random()*len)
    }
    const handleHex=()=>{
        const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
        let hexColor="#"
        for(let i=0;i<6;i++){
            hexColor+=hex[handleRandom(hex.length)]
        }
        setColor(hexColor)
    }
    const handleRgb=()=>{
        const r=handleRandom(256)
        const g=handleRandom(256)
        const b=handleRandom(256)
        setColor(`rgb(${r},${g},${b})`)
    }   
    useEffect(()=>{
        if (typeofcolor==="hex") handleHex()
        else handleRgb()
    },[typeofcolor])
  return (
    <div style={{
    height: "100vh",
    backgroundColor:color,
    display:"flex",
    justifyContent:"center",
    }}>
    <div className='btn' onClick={()=>setTypeofcolor("hex")}><button>HEX COLOR</button></div>
    <div className='btn' onClick={()=>setTypeofcolor("rgb")}><button>RGB COLOR</button></div>
    <div className='btn' onClick={typeofcolor==="hex"?
    ()=>handleHex():
    ()=>handleRgb()
    }><button>RANDOM COLOR</button>
        <div className='main'>
            {typeofcolor}<br/>
            {color}
        </div>
    </div>
    </div>
  )
}

export default Color
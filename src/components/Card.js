import React from 'react'

function Card({img,name,price,desc}) {
  return (
    <div style={{minWidth:"300px",maxWidth:"500px", height:"max-content",marginTop:"50px"}}>
        <img src={img} alt="#" width="100%"/>
        <div style={{display:'flex', flexDirection:"column",padding:"20px"}}>
            <div style={{display:'flex', justifyContent:"space-between"}}>
                <h3>{name}</h3>
                <h3 style={{color:"#F4CE14"}}>{price}</h3>
            </div>
            <p style={{color:"black",opacity:"0.7",textAlign:"left"}}>{desc}</p>
            <button style={{display:"flex",alignContent:'flex-end',gap:"10px",border:"none",background:"white",marginTop:"20px"}}>
                <p style={{color:"black",fontWeight:"bold"}}>Order a delivery</p>
                <p style={{color:"black",fontWeight:"bold"}}>{">"}</p>
            </button>
        </div>

    </div>
  )
}

export default Card
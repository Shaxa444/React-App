import React from 'react'
import Nav from './Nav';
import logo from "./Images/Logo.png"

function Header() {
  return (
    <div style={{display:"flex", flexWrap:"wrap",justifyContent:"space-evenly", alignItems:"center"}}>
        <img src={logo} alt="#" height={"50px"} />
        <Nav />
    </div>
  )
}

export default Header
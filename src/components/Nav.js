import React from 'react'

function Nav() {
  return (
      <ul style={{display:'flex', justifyContent:"center", alignItems:"center", listStyle:"none", padding:"35px 60px",gap:"30px",flexWrap:"wrap"}}>
          <li><a style={{textDecoration:"none", color:"black"}} href="/google.com">Home</a></li>
          <li><a style={{textDecoration:"none", color:"black"}} href="/google.com">About</a></li>
          <li><a style={{textDecoration:"none", color:"black"}} href="/google.com">Menu</a></li>
          <li><a style={{textDecoration:"none", color:"black"}} href="/google.com">Reservations</a></li>
      </ul>
)
}

export default Nav
import React from 'react'

function Button({children,...props}) {
  return (
    <div>
        <button style={{background:"rgb(244, 206, 20)", fontSize:"20px", borderRadius:"17px", color:"black", padding:"18px 40px",border:"none",...props}} >{children}</button>
    </div>
  )
}

export default Button
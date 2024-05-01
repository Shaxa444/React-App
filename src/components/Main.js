import React from 'react'
import image from "./Images/restaurant.jpg"
import Button from './Button'
import Card from './Card'

function Main() {
  return (
    <div>
      <div style={{position:'relative'}}>
        <section style={{paddingTop:"50px"}}>
          <article>
            <h1>Little Lemon</h1>
            <h2 style={{paddingBottom:"20px",color:"white"}}>Chicago</h2>
            <p>We are family owned Mediterranean restaurant where you can enjoy and unwind together. Our restaurant provides traditional meals.</p>
            <Button margin="50px 0px"><p style={{color:"black"}}>Reserve a table</p></Button>
          </article>
          <div style={{maxWidth:"600px", minWidth:"100px"}}>
            <img src={image} alt="" style={{width:"100%",border:"1px solid white"}}/>
          </div>
        </section>
        <div style={{background:"#495E57", position:"absolute", height:"85%", width:"100%", top:"0px",left:"0px",zIndex:"-1"}}></div>
      </div>
        {/* ---------------------------CARDS---------------------------------------- */}
      <div style={{margin:"50px auto", display:"flex", justifyContent:"center",flexDirection:"column", alignItems:"center",padding:'50px'}}>
        <div style={{display:"flex", justifyContent:"space-between", flexWrap:"wrap", alignItems:"center",width:"89%"}}>
          <h1 style={{color:"black"}}>This weeks specials!</h1>
          <Button margin="30px 0px">Online Menu</Button>
        </div>
        <div className="container">
        <Card img={image} name="Greek salad" price="$12.99" desc="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "/>
        <Card img={image} name="Greek salad" price="$12.99" desc="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "/>
        <Card img={image} name="Greek salad" price="$12.99" desc="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "/>
        </div>
      </div>
    </div>
  )
}

export default Main
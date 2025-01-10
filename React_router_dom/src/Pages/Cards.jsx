import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Cards = ({card}) => {
    const cardsStyleContainer ={
        display : 'grid',
        gridTemplateColumns :"1fr 1fr 1fr",
        gap:"10px"
    }

    console.log(card)
  return (
    <>
    <h1>This is Cards Page</h1>
    <div style={cardsStyleContainer}>

      {
        card.length > 0 && card.map((item)=>(
            <div key={item.id} style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',border:'2px solid blue'}}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button style={{fontSize:'15px'}}><Link to={`/cards/${item.id}`}>View Details</Link></button>
            </div>
        ))

      }
    </div>
    </>
  )
}

export default Cards

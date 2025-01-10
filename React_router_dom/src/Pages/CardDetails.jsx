import React from 'react'
import { useParams } from 'react-router-dom'

const CardDetails = ({card}) => {

    let {id} = useParams();
    console.log(card)
    const getCard = card.find((i)=> i.id == id)

    
  return (

     <div key={getCard.id} style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',border:'2px solid blue',width:"800px",height:"auto"}}>
                <img src={getCard.image} alt={getCard.title} style={{width:"200px",height:"auto"}}/>
                <h2>{getCard.title}</h2>
                <p>{getCard.description}</p>
                <h3>Price : {getCard.price}</h3>
    </div>
  )
}

export default CardDetails

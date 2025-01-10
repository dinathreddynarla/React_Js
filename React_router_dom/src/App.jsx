
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Cards from './Pages/Cards'
import CardDetails from './Pages/CardDetails'
import { getCardsUrl } from './Service_Layer/constants'
import { useState ,useEffect} from 'react'
function App() {
  const [card,setCard] = useState([])

  const getCards = ()=>{
          fetch(getCardsUrl)
          .then((res)=>res.json())
          .then((data)=>{
            setCard(data)
      })
      }

      useEffect(()=>{
        getCards()
    },[])

 console.log(card)
  return (
    <>
     <Header />
    <Routes >
    <Route path="/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/cards" element={<Cards card={card}/>}/>
    <Route path="/services" element={<Services />}/>
    <Route path="/cards/:id" element={<CardDetails card={card}/>}/>

    </Routes>
    </>
  )
}

export default App

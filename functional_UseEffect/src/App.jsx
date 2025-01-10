import { useState ,useEffect} from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(1)
  const [data , setData] = useState([])

  const getUsers = () =>{
    fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
    .then(response => response.json())
    .then((data) =>{
      setData(data)
      console.log("loading 2",data)

    })
  }
  useEffect(()=>{
    getUsers()
  },[count])

  
  console.log("loading 1",data)
  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={()=>setCount((count) => count +  1 )}>
        Count is {count}
      </button>
    </>
  )
}

export default App

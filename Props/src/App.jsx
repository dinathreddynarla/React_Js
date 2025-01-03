
import './App.css'
import Child from './Components/Child'

function App() {
  const name = "Dinath"
  const data = [
    {
      id:1,
      name:"Dinath",
      age:22
    },
    {
      id:2,
      name:"Ravi",
      age:23
    },
    {
      id:3,
      name:"Hari",
      age:23
    }
  ]
  return (
    <>
       <h1>This is parent</h1>
       <Child ravi={data} dinath = "helloWorld"/>
    </>
  )
}

export default App

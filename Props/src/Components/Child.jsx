// import GrandChild from "./GrandChild";

const Child = (props) =>{
    console.log(props)
    let array= props.ravi 
    return (
        <>
        {array.map((i)=>(
            <h1 key={i.id}>This is {i.name} and age is {i.age}</h1>

        ))}
        
        </>

    )
}

export default Child;

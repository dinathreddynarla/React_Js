const GrandChild = (props)=>{

    let array = props.raju
    return (
        <>
        {array.map((i)=>(
            <h1 key={i.id}>This is {i.name} and age is {i.age}</h1>

        ))}
        </>
    )
}


export default GrandChild;
import React from 'react'

const Tabledata = (props) => {
    
  return (
    <>
    {props.data.length >0 ? (
                <>
                {
                    props.data.map((val)=>(
                        <tr key={val.id}>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.price ? val.price :"N/A"}</td>
                            <td>{val.category}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))
                }
                </>
    )
    :(
        <>
       <tr>
          <td colSpan="5" style={{ textAlign: "center" }}>
            No data found
          </td>
        </tr>
        </>
    )
}

    </>
  )
}

export default Tabledata

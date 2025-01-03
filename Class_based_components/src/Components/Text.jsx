import React, { Component } from 'react'

export default class Text extends Component {
  render() {
    let data = this.props.data
    return (
      <>
        {data.map((i)=>(
            <h1 key= {i.id}>My name is {i.name} and i am from {i.city} and i am {i.age} years old</h1>
        ))}
      </>
    )
  }
}

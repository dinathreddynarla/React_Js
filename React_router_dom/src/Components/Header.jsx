import React from 'react'
import { Link } from 'react-router-dom'
import menu from "../Data/menu"
const Header = () => {
  return (
    <>
      <nav>
        <ul>
          {menu.map((v,i)=>(
            <li key={i}>
            <Link to={v.path}>{v.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Header

import React from 'react'
import { Link } from 'react-router-dom'

export default function UlLi(props) {
  return (
    <>
      
        <li><Link to={props.navigationLink}/>{props.navigatedpagename}</li>

    </>
  )
}

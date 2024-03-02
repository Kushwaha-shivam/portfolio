import React from 'react'
import './PageNotFound.css'
import { NavLink } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='display-error'>
      <h1><span>Error-404</span> : Page Not Found</h1>
      <button className="return-home-page">
        <NavLink to={'/'}>Return HomePage</NavLink>
      </button>

    </div>
  )
}

export default PageNotFound

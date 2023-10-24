import React from 'react'
import { Link } from 'react-router-dom'

const LinksSidebar = (style) => {
  return (
    <div className={style}>
                <Link to={'/Home'}>Home</Link>
                <Link to={'/Movies'}>Movies</Link>
                <Link to={'/TVShows'}>TVShows</Link>
                <Link to={'/Documentales'}>Documentales</Link>
                <Link to={'/Contacto'}>Contacto</Link>
           
    </div>
  )
}

export default LinksSidebar
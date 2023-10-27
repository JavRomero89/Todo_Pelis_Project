import React from 'react'
import { Link } from 'react-router-dom'


const LinksSidebar = (style) => {
  return (
    <div className='flex flex-col px-2 py-1 gap-7'>
                <Link to={'/Home'}>Home</Link>
                <Link to={'/Movies'}>Movies</Link>
                <Link to={'/TVShows'}>TVShows</Link>
                <Link to={'/Documentales'}>Documentales</Link>
                <Link to={'/Contacto'}>Contacto</Link>
           
    </div>
  )
}

export default LinksSidebar
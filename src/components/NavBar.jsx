import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='w-screen border-b-4 border-green-700 text-center fixed top-0 bg-green-600 font-bold text-lg text-white'>
            <ul>
                <li className='inline-block py-4'>
                    <Link to="/" className='px-6' >
                        Home
                    </Link>
                </li>
                <li className='inline-block py-4'>
                    <Link to="/article-list" className='px-6' >
                        Articulos
                    </Link>
                </li >
                <li className='inline-block py-4'>
                    <Link to="/about" className='px-6' >
                        Nosotros
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
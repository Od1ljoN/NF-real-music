import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <h1>NF real music</h1>

                <ul className='menu'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Servis</li>
                    <li>Contact</li>
                </ul>
            </div>
        </>
    )
}

export default Navbar
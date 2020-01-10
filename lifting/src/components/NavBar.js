import React from "react"
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <div className='nav'>
            <h1 className='title'>Weight Lifting Tracker</h1>
            <nav className="links">
                <div>
                   <a href="https://loving-lovelace-65d935.netlify.com/#">Marketing</a>
                </div>
                <div>
                    <Link to='/login'>Login</Link>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
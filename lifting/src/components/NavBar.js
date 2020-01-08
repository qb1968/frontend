import React from "react"
import {BrowserRouter as Link} from "react-router-dom"
import LoginForm from "./Login/loginForm";

const NavBar = () => {
    return (
        <div className='nav'>
            <h1 className='title'>Weight Lifting Tracker</h1>
            <nav className="links">
                <div>
                    <Link to=''>Marketing</Link>
                </div>
                <div>
                    <Link to='/login' component={LoginForm}>Login</Link>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
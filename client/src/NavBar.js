import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props)=> {
    console.log(props)
    return (
        <Link to="/">Home</Link>
            {props.currentUser
            ? (
                <span>
                    <Link to="/vip">VIP</Link>
                    <Link to="/logout">Log Out</Link>
                </span>
            )
            : (
                <span>
                    <Link to="/login">Log In</Link>
                    <Link to="/signup">Sign Up</Link>
                </span>
            )
        }

}
    
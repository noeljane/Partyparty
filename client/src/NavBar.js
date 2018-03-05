import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    const { currentUser } = props
    return (
        <div>
                
              { currentUser
            ? (
                <span>
                    <Link to={`/users/${currentUser._id}`} >My Parties  </Link>
                    <Link to="/logout">Log Out</Link>
                </span>
            )
            : (
                <span>
                    <Link to="/login">Log In  </Link>
                    <Link to="/signup">Sign Up</Link>
                </span>
            )
        }
        </div>
    )

}

export default NavBar


    
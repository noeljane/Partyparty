import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const NavBar = (props) => {
    const { currentUser } = props
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Party Party</a>
                { currentUser
                ? (
                    <div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <span>
                                    <Link to={`/users/${currentUser._id}`} >My Parties  </Link>
                                    <Link to="/logout">Log Out</Link>
                                </span>
                            
                            </div>
                        </div>
                    </div>
            
        
                )
                : (
                    <div>
                        <div>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <span>
                                    <Link to="/login">Log In  </Link>
                                    <Link to="/signup">Sign Up</Link>
                                </span>
                            
                            </div>
                        </div>
                    </div>
                    </div>
                    
                )

                }
            </nav>
            
        </div>
    )

}

export default NavBar


    
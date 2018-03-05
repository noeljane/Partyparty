import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    const { currentUser } = props
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">Party Party 🎉 </a>
                { currentUser
                ? (
                    <div>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
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
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>

                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
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


    
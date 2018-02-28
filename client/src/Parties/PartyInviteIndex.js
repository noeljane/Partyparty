import React from 'react'
import clientAuth from '../clientAuth.js'

import { Link } from 'react-router-dom'

class PartyInviteIndex extends React.Component {
    state = {
        parties: []
    }
    
    render(){
        return(
            <h1>This is supposed to be a list of parties I'm invited to. </h1>
        )
    }
}

export default PartyInviteIndex

import React from 'react'

import axios from 'axios'

class PartyShow extends React.Component {
    state = {
        party: '', 
        invites: '', 
        going: ''
    }

    // componentDidMount = () => {

    // }


    render(){
        return(
            <div>
                <h1>Here's your party</h1>
            </div>
        )
    }
}

export default PartyShow
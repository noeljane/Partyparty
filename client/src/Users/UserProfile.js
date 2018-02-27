import React from 'react'
import clientAuth from '../clientAuth.js'

import PartyIndex from '../Parties/PartyIndex.js'

class UserProfile extends React.Component {
    state = {
        user: []
    }
    
    render(){
        const { user } = this.state
        console.log(this.props)
        return(
            <div>
                {/* This doesn't work!!! */}
                <h1 id={this.props.user.id}>Hi {this.props.user.name}!</h1> 
                    <h3>Your Parties:</h3>
                    <PartyIndex />

                    <h3>Parties You're Invited to: </h3>
                        <p>create a party index of this </p>

                    <h3>Parties You're Attending:</h3>
                        <p>create a party index of this </p>
                
                <button>Create Party</button>

               
            </div>

        )
        
    }
    
}

export default UserProfile
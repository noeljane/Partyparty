import React from 'react'

import PartyIndex from '../Parties/PartyIndex.js'
import PartyInviteIndex from '../Parties/PartyInviteIndex.js'

class UserProfile extends React.Component {
    render(){
        return(
            <div>
                {/* This doesn't work!!! */}
                <h1 id={this.props.user.id}>You're a party animal!</h1> 
                <img src="https://media2.giphy.com/media/3o6fJ47X7rsRR9wDlu/200w.webp" />
                    <h3>Your Parties:</h3>
                        <PartyIndex />

                    <h3>Parties You're Attending: </h3>
                        <p>create a party index of this </p>
                        <PartyInviteIndex />
                        
                
                <button>Create Party</button>

               
            </div>

        )
        
    }
    
}

export default UserProfile
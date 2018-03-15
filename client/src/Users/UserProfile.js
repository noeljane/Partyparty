import React from 'react'


import PartyIndex from '../Parties/PartyIndex.js'
import PartyInviteIndex from '../Parties/PartyInviteIndex.js'

class UserProfile extends React.Component {
    render(){
        return(
            <div>
                {/* <img alt="Koala dancing to a boombox" src="https://media2.giphy.com/media/3o6fJ47X7rsRR9wDlu/200w.webp" /> */}
                <h1 id={this.props.user.id}>Your Parties: </h1> 
                    <h3>Your Parties:</h3>
                        <PartyIndex />

                    <h3>Parties I'm Attending: </h3>
                        <PartyInviteIndex />

            </div>

        )
        
    }
    
}

export default UserProfile
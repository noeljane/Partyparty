import React from 'react'

import axios from 'axios'

import Chat from '../Chat/Chat.js'

class PartyShow extends React.Component {
    state = {
        party: '', 
        invites: '', 
        going: ''
    }

    componentDidMount = () => {
        console.log(this.props.partyId)
        axios({method: 'get', url:`/parties/${this.props.partyId}`})
        .then((res) => {
            this.setState({
                party:res.data
            })
        })

    }


    render(){
        const { party } = this.state
        return(
            <div>
                <h1>Here's your party</h1>
                    <h2>{party.title}</h2>
                    <h3>{party.description}</h3>
                    <p>{party.date}</p>
                    <p>{party.location}</p>

                <Chat />
            </div>
        )
    }
}

export default PartyShow
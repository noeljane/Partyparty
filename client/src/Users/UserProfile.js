import React from 'react'
import axios from 'axios'

import PartyIndex from '../Parties/PartyIndex.js'

class UserProfile extends React.Component {
    state = {
        user: [],
        parties: []
    }
    
    componentDidMount = () => {
        axios({method:'get', url: `/users/${this.props.userId}`})
        .then((res) => {
            this.setState({
                user: res.data
            })  

        })

    }
    render(){
        const { user } = this.state
        console.log(this.props)
        return(
            <div>
                {/* This doesn't work!!! */}
                <h1 id={this.state.user.id}>Hi! I'm {this.state.user.name}</h1> 
                <h3>{this.state.user.name}</h3>
                <PartyIndex />
                <button>Create Party</button>
               
            </div>

        )
        
    }
    
}

export default UserProfile
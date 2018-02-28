import React from 'react'
import clientAuth from '../clientAuth.js'

import { Link } from 'react-router-dom'

class PartyInviteIndex extends React.Component {
    state = {
        parties: []
    }

    componentDidMount(){
        clientAuth.getPartyInvites().then(res =>{
            this.setState({
                parties: res.data.reverse()
            })
        })
    }
    
    render(){
        console.log("party invite index says: ")
        console.log(this.state.parties)
        return(
            <div>
                <h1>This is supposed to be a list of parties I'm invited to. </h1>
                <ul>
                    {this.state.parties.map((p)=>{
                        return 
                        <li key={p._id}>
                            <Link to={`/parties/${p._id}`}></Link>
                            {p.title}
                        </li>
                    })}
                </ul>
            </div>
        )
    }
}

export default PartyInviteIndex

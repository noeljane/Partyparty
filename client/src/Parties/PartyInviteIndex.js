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
        return(
            <div>
                
                <ul>
                   
                    {this.state.parties.map((p)=> {
                            return(
                                <li key={p._id} >
                            <Link to={`/parties/${p._id}`}>
                                {p.title}</Link> 
                                </li>
                            )
                    })}
                </ul>
            </div>
        )
    }
}

export default PartyInviteIndex

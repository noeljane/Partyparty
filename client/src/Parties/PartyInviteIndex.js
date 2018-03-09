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
                 <div class="container">
                        <div class="row">
                        {this.state.parties.map((p)=> {
                            return(
                                <div class="col-sm-3">
                                <div class="card" key={p._id}>
                                <img class="card-img-top" src="https://images.unsplash.com/photo-1496707783091-854ecd84ae5e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83ad261f046b896efc451f7e8ae165af&auto=format&fit=crop&w=800&q=60"/>
                                <div class="card-body">
                                    <h5 class="card-title">{p.title}</h5>
                                    <a href={`/parties/${p._id}`} class="btn btn-primary">Party</a>
                                </div>
                        </div>
                    </div>
                            
                            )
                            
                        })}
                    </div> 
                    </div>
    
                
                {/* <ul>
                   
                    {this.state.parties.map((p)=> {
                            return(
                                <li key={p._id} >
                            <Link to={`/parties/${p._id}`}>
                                {p.title}</Link> 
                                </li>
                            )
                    })}
                </ul> */}
            </div>
        )
    }
}

export default PartyInviteIndex

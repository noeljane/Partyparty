import React from 'react'
import clientAuth from '../clientAuth.js'
import './PartyInviteIndex.css'

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
                 <div className="container">
                        <div className="row">
                        {this.state.parties.map((p)=> {
                            return(
                                <div className="col-sm-3">
                                <div className="card" key={p._id}>
                                <img className="card-img-top" src="https://images.unsplash.com/photo-1481016570479-9eab6349fde7?ixlib=rb-0.3.5&s=3cc0a309c344e5a34b359e5a663a16cc&auto=format&fit=crop&w=800&q=60"/>
                                <div class="card-body">
                                    <h5 className="card-title">{p.title}</h5>
                                    <a href={`/parties/${p._id}`} className="btn">Party</a>
                                </div>
                        </div>
                    </div>
                            
                            )
                            
                        })}
                    </div> 
                    </div>
    
            </div>
        )
    }
}

export default PartyInviteIndex

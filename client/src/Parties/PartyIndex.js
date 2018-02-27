import React from 'react'
import clientAuth from '../clientAuth.js'

class PartyIndex extends React.Component {
    state = {
        parties: []
    }
    
    componentDidMount(){
        clientAuth.getParties().then(res => {
            this.setState({
                parties: res.data.reverse()
            })
        })
    }
    render (){
        return (
            <div>
                <h1>This should be a list of my parties: </h1>
                <ul>
                    {this.state.parties.map((p)=>{
                        return (
                            <li> {p.title}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default PartyIndex
import React from 'react'
import clientAuth from '../clientAuth.js'

import { Link } from 'react-router-dom'

class PartyIndex extends React.Component {
    state = {
        parties: [], 
        
    }
    
    componentDidMount(){
        clientAuth.getParties().then(res => {
            this.setState({
                parties: res.data.reverse()
            })
        })
    }

    submitParty(evt){
        evt.preventDefault()
        const fields = {
            title: this.refs.title.value, 
            description: this.refs.description.value, 
            date: this.refs.date.value,
            location: this.refs.location.value

        }
        clientAuth.createParty(fields).then(res => {
            if(res.data.success) {
                this.setState({
                    parties:[res.data.party, ...this.state.parties]
                })
                this.refs.title.value = ''
                this.refs.description.value = ''
                this.refs.date.value = ''
                this.refs.location.value = ''
                
            }
        })
    }


    render (){
        console.log(this.state)
        return (
            <div id="allDemParties">
                

                 <div id="create-parties">
        
                    <h1>Let's Throw a Party </h1>
                    <form onSubmit={this.submitParty.bind(this)}>
                        <input type="text" placeholder="title of party" ref="title"></input>
                        <input type="text" placeholder="description" ref="description"></input>
                        <input type="date" placeholder="date"  ref="date"></input>
                        <input type="text" placeholder="Location" name="location" ref="location"></input>
                    <button>Create Party</button>
                    </form>
                    
                </div>

                <div id="my-parties">
                    <h1> Parties I made: </h1>
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
                    


            </div>

        )
    }
}

export default PartyIndex
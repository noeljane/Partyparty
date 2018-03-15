import React from 'react'
import clientAuth from '../clientAuth.js'

// import { Link } from 'react-router-dom'

class PartyIndex extends React.Component {
    state = {
        parties: [], 
        createParty: false, 
        
    }
    
    componentDidMount(){
        clientAuth.getParties().then(res => {
            this.setState({
                parties: res.data
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

    makeCreatePartyTrue(){
        this.setState({
            createParty:!this.state.createParty
        })
    }


    render (){
        console.log(this.state.parties)
        return (
            <div id="allDemParties">
                
                <button onClick={this.makeCreatePartyTrue.bind(this)}>Create Party</button>
                {this.state.createParty
                ?
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
                :
                null
                }
                
                <div id="my-parties">
                    <h3> Parties I made: </h3>
                <div>
                    {this.state.parties
                    ?
                    <div class="container">
                        <div class="row">
                        {this.state.parties.map((p)=> {
                            return(
                                <div class="col-sm-3">
                                <div class="card" key={p._id}>
                                <img class="card-img-top" src="https://images.unsplash.com/photo-1481016570479-9eab6349fde7?ixlib=rb-0.3.5&s=3cc0a309c344e5a34b359e5a663a16cc&auto=format&fit=crop&w=800&q=60" alt="Card image cap"/>
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
                    : 
                    null
                    }
                    </div>
                    </div>
                    


            </div>

        )
    }
}

export default PartyIndex
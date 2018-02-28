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

    submitParty(evt){
        evt.preventDefault()

    }

    
    render (){
        console.log(this.state.parties)
        return (
            <div id="my-parties">
                <h1>This should be a list of my parties: </h1>
                <ul>
                    {this.state.parties.map((p)=>{
                        return (
                            <li id={p._id}> {p.title}</li>
                        )
                    })}
                </ul>
            </div>

            // <div id="create-parties">
        
            //     <h1>Let's Throw a Party 🎉</h1>
            //      <form onSubmit={this.submitParty.bind(this)}>
            //     <input type="text" placeholder="title of party" ref="title"></input>
            //     <input type="text" placeholder="description" ref="description"></input>
            //     <input type="date" placeholder="date"  ref="date"></input>
            //     <input type="text" placeholder="Location" name="location" ref="location"></input>
            //     <button>Create Party</button>
            //     </form>
                
            // </div>
        )
    }
}

export default PartyIndex
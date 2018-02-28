import React from 'react'
import axios from 'axios'
import clientAuth from '../clientAuth.js'
import Chat from '../Chat/Chat.js'

class PartyShow extends React.Component {
    state = {
        parties: [],
        party: '', 
        invites: '', 
        going: '',
        edit: false, 
        user: ''
    }

    componentDidMount = () => {
        // clientAuth.getParty(this.props.partyId).then(res =>{
        //     console.log(res.data)
        // } )
        clientAuth.getParties().then(res => {
            this.setState({
                party: res.data.filter((p) => p._id === this.props.partyId)[0]
            })
            console.log('state is', this.state.party)
        })
    }
  

    handleEditSubmit (evt){
        evt.preventDefault()
        const fields = {
            title: this.refs.editTitle.value, 
            description: this.refs.editDescription.value, 
            date: this.refs.editDate.value,
            location: this.refs.editLocation.value

        }
        clientAuth.updateParty(this.props.partyId, fields).then(res => {
            this.setState({
                party: res.data
                })


        })
       

    }

    makeEditTrue(){
        this.setState({
            edit:!this.state.edit

        })
    }


    render(){
        // console.log(this.state.party.title)
        return(
            <div>
                <h1>Here's your party</h1>
                {this.state.party
                ?
                <div>
                    <h1>it exists</h1>
                    <h2>{this.state.party.title}</h2>
                    <h3>{this.state.party.description}</h3>
                    <p>{this.state.party.date}</p>
                    <p>{this.state.party.location}</p> 
                </div>
                :
                    <h1>it does not exist</h1>
                }
                <button>Delete</button>
                <button onClick={this.makeEditTrue.bind(this)}>Edit Button</button>
                {/* {this.state.edit
                 ?
                     <form key={party._id} onSubmit={this.handleEditSubmit.bind(this)}>
                     <input type="text" defaultValue={this.state.party.title} ref="editTitle"></input>
                     <input type="text" defaultValue={party.description} ref="editDescription"></input>
                     <input type="date" defaultValue={party.date}  ref="editDate"></input>
                     <input type="text" defaultValue={party.location} name="location" ref="editLocation"></input>
                     <button>Update</button>
                    </form>
                 :null
                } */}

                
               
            </div>
        )
    }
}

export default PartyShow
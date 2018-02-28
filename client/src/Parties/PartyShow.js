import React from 'react'
import axios from 'axios'

import clientAuth from '../clientAuth.js'
import Chat from '../Chat/Chat.js'
import UsersList from '../Users/UsersList.js'

class PartyShow extends React.Component {
    state = {
        parties: [],
        party: '', 
        invitees: '', 
        going: '',
        edit: false, 
        user: '', 
        users: [], 
    }

    componentDidMount = () => {
        clientAuth.getParties().then(res => {
            this.setState({
                party: res.data.filter((p) => p._id === this.props.partyId)[0],
                invitees: this.state.party.invitees, 
                parties: res.data
            }), 
                
            console.log('state is', this.state.party)
        })

        clientAuth.getParty(this.props.partyId).then(res => {
            console.log(res.data)
            this.setState({
                party: res.data
            })
        })

        axios({method: 'get', url: '/api/users'})
          .then((res) => { 
            this.setState({
              users: res.data
            })
          })
    }
  

    handleEditSubmit (evt){
        evt.preventDefault()
        console.log("handleEditSubmit is running")
        const fields = {
            title: this.refs.editTitle.value, 
            description: this.refs.editDescription.value, 
            date: this.refs.editDate.value,
            location: this.refs.editLocation.value

        }
        console.log(fields)
        console.log(this.state.party._id)
        console.log("Party Id:" + this.props.partyId)
        clientAuth.updateParty(this.props.partyId, fields).then((res => {
            console.log(res.data)
            this.setState({
                party: res.data.party,
                edit:!this.state.edit
                })


        }))

       

    }

    makeEditTrue(){
        this.setState({
            edit:!this.state.edit

        })
    }

    inviteOne(evt){
        evt.preventDefault()
        console.log(this)
        console.log(this.state.party.invitees)
        // this.setState({
        //     invitees: [...this.state.party.invitees, user]
        // })

    }


    render(){
        const { party } = this.state
        return(
            <div>
                <h1>Here's your party</h1>
                {this.state.party
                ?
                <div>
                    <h2>{this.state.party.title}</h2>
                    <h3>{this.state.party.description}</h3>
                    <p>{this.state.party.date}</p>
                    <p>{this.state.party.location}</p> 
                </div>
                :
                   <h1>oops! No Party here anymore</h1>
                }
                <button>Delete</button>
                <button onClick={this.makeEditTrue.bind(this)}>Edit Button</button>
                    {this.state.edit
                    ?
                        <form key={party._id} onSubmit={this.handleEditSubmit.bind(this)}>
                        <input type="text" defaultValue={party.title} ref="editTitle"></input>
                        <input type="text" defaultValue={party.description} ref="editDescription"></input>
                        <input type="date" defaultValue={party.date}  ref="editDate"></input>
                        <input type="text" defaultValue={party.location} name="location" ref="editLocation"></input>
                        <button>Update</button>
                        </form>
                    :null
                    }
                {/*Add button to toggle away invites*/}
                <div id="UsersList">
                    <ul>
                        {this.state.users.map((u)=>{
                            return <li key={u._id}>
                                <button onClick={this.inviteOne.bind(this)}>Invite</button>
                                {u.name}
                                {u._id}
                                </li>
                         })} 
                    </ul>
                </div>
                
                
               
            </div>
        )
    }
}

export default PartyShow
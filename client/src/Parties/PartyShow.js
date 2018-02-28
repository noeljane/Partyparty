import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import clientAuth from '../clientAuth.js'
import Chat from '../Chat/Chat.js'
import UsersList from '../Users/UsersList.js'

class PartyShow extends React.Component {
    state = {
        party: '', 
        invitees: [], 
        going: '',
        edit: false, 
        user: '', 
        users: []
    }

    componentDidMount = () => {
        clientAuth.getParty(this.props.partyId).then(res => {
            console.log(res.data)
            this.setState({
                party: res.data,
                invitees: res.data.invitees
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
        const fields = {
            title: this.refs.editTitle.value, 
            description: this.refs.editDescription.value, 
            date: this.refs.editDate.value,
            location: this.refs.editLocation.value

        }
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

    deleteThisParty(){
        //THIS DOESNT WORK!!!
        
        clientAuth.deleteParty(this.props.partyId).then((res) => {
            console.log(res.data)
            this.setState({
                party: null
            })
        })

    }

    inviteOne (user) {
        
        console.log("invite one is running"
        )
        console.log(user)
        const fields = {
            userId: user._id
        }
        clientAuth.updateParty(this.props.partyId, fields).then((res => {
            console.log(res.data)
            this.setState({
                invitees: [...this.state.invitees, user]
                })


        }))

    }


    render(){
        const { party } = this.state
        console.log("invitees: " + this.state.invitees)
        return(
            <div>
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
                </div>

                <div>
                    <h2>People going to the party</h2>
                    {this.state.invitees
                    ?
                    <ul>
                        {this.state.invitees.map((i)=>{
                            return <li key={i.name}>{i.name}</li>
                        })}
                    </ul>
                    :
                    null
                    }
                </div>    

                <Chat />
                <button onClick={this.deleteThisParty.bind(this)}>Delete</button>
                <button onClick={this.makeEditTrue.bind(this)}>Edit Party</button>
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
                    <h1>Invite More People to Your Party</h1>
                    <ul>
                        {this.state.users.map((u)=>{
                            return <li key={u._id}>
            
                        
                                        <button onClick={this.inviteOne.bind(this, u)}>Invite</button>
                                        <Link to={`/users/${u._id}`}>{u.name}
                                        </Link>
                                </li>
                         })} 
                    </ul>
                </div>
                
                
               
            </div>
        )
    }
}

export default PartyShow
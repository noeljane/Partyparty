import React from 'react'
import axios from 'axios'

import clientAuth from '../clientAuth.js'
import Chat from '../Chat/Chat.js'

import './PartyShow.css'

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
        alert("Are you sure you want to delete this?")
        clientAuth.deleteParty(this.props.partyId).then((res) => {
            this.props.history.push('/')
        })

    }

    inviteOne (user) {
        //
        function checkAvailability(arr, val) {
            return arr.some(arrVal => val._id === arrVal._id)
            
        }

        

        if (checkAvailability(this.state.invitees, user)) {
            alert("You already invited this person, silly!")
        } else {
            const fields = {
                userId: user._id
            }
    
            
            clientAuth.updateParty(this.props.partyId, fields).then((res => {
                this.setState({
                    invitees: [...this.state.invitees, user]
                    })
    
    
            }))
        }  

    }

    deleteOne (user) {

        const fields = {
            invitees: this.state.invitees.filter((i) => {
                return i._id !== user._id
            })
        }

        clientAuth.updateParty(this.props.partyId, fields).then((res => {
            console.log(res.data)
            this.setState({
                invitees: fields.invitees
            })
        }))
    }


    render(){
        const { party } = this.state
        
        // console.log(this.state.party.date)
        // const date = this.state.party.date
        //new Date (date)
        //date.toDateString() // "Thu Dec 29 2011"
        // date.toUTCString()  // "Fri, 30 Dec 2011 02:14:56 GMT"
        // date.getMonth()     // 11
        // date.getDate()      // 29
        // date.getFullYear()  // 2011
        return(
            <div>
                <div>
                <h1>Here's your party</h1>
                {this.state.party
                ?
                <div id="party-box">
                    <label>Title:</label>
                    <h2>{this.state.party.title}</h2>
                    <label>Description:</label>
                    <h3>{this.state.party.description}</h3>
                    <label>Date:</label>
                    <p>{this.state.party.date}</p>
                    <label>Location:</label>
                    <p>{this.state.party.location}</p> 
                </div>
                :
                   <h1>oops! No Party here anymore</h1>
                }
                </div>

                {this.props.currentUser._id === party._by
                ?
                <div id="signed-in content">
                    <button onClick={this.deleteThisParty.bind(this)}>Delete</button>
                    <div id="for-user-only">
                        <div id="edit-fields">
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
                        </div>
                <Chat />
                <div>
                    <h1>People going to the party</h1>
                    {this.state.invitees
                    ?
                        <div className="container">
                        <div className="row">
                        {this.state.invitees.map((i)=> {
                            return(
                                <div className="col-sm-3">
                                <div className="card" key={i._id + this.state.party._id}>
                                {/* <img className="card-img-top" alt="pineapple with sunglasses"src="https://images.unsplash.com/photo-1496707783091-854ecd84ae5e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83ad261f046b896efc451f7e8ae165af&auto=format&fit=crop&w=800&q=60"/> */}
                                <div className="card-body">
                                    <h5 className="card-title">{i.name}</h5>
                                    <button onClick={this.deleteOne.bind(this, i)} className="btn btn-primary">Delete invite</button>

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

               
                        
                       <div>
                        <h1>Invite More People to Your Party</h1>
                        </div>
                            
                        <div className="container">
                        <div className="row">
                        {this.state.users.map((u)=> {
                            return(
                                <div className="col-sm-3">
                                <div className="card" key={u._id}>
                                {/* <img className="card-img-top" src="https://images.unsplash.com/photo-1469598614039-ccfeb0a21111?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cbb9f4a2a8e81e5f7946577e6b8a55f1&auto=format&fit=crop&w=700&q=60"/> */}
                                <div className="card-body">
                                    <h5 className="card-title">{u.name}</h5>
                                    <button onClick={this.inviteOne.bind(this, u)}className="btn btn-primary">Invite</button>
                                    

                                </div>
                        </div>
                        </div>
                            
                            )
                            
                        })}
                        </div> 
                        </div>
                        </div>
                    </div>
               
                :
                null}
                
                
               
            </div>
        )
    }
}

export default PartyShow
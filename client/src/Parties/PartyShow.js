import React from 'react'
import axios from 'axios'
import clientAuth from '../clientAuth.js'
import Chat from '../Chat/Chat.js'

class PartyShow extends React.Component {
    state = {
        party: '', 
        invites: '', 
        going: '',
        edit: false, 
        user: ''
    }

    componentDidMount = () => {
        // console.log(this.props.partyId)
        // axios({method: 'get', url:`/parties/${this.props.partyId}`})
        // .then((res) => {
        //     this.setState({
        //         party:res.data
        //     })
        // })
        
    //     })

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
        const { party } = this.state
        console.log(this.state.party)
        return(
            <div>
                <h1>Here's your party</h1>
                    <h2>{party.title}</h2>
                    <h3>{party.description}</h3>
                    <p>{party.date}</p>
                    <p>{party.location}</p>

                <Chat />
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

                
               
            </div>
        )
    }
}

export default PartyShow
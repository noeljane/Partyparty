import React from 'react'
import clientAuth from '../clientAuth.js'
import axios from 'axios'

import UsersList from '../Users/UsersList.js'

class CreateParty extends React.Component {
    state = {
        party: {}
    }
    

    componentDidMount(){
       

    }
    

    submitInfo = (evt) => {
        evt.preventDefault()
        clientAuth.createParties().then((res) => {
            this.setState({
                parties: res.data
            })
        })
        axios({
            method: 'post', 
            url: '/api/parties', 
            data: {
                title: this.refs.title.value, 
                description: this.refs.description.value, 
                date: this.refs.date.value,
                location: this.refs.location.value
                }
        }).then((res) => {     
                this.setState({
                    parties: [...this.state.parties, res.data]
                })
            
        })

       
    }

    render (){
        console.log(this.refs)
        // console.log(this.state.fields)
        // const { title, description, date, location } = this.state.fields
        return(
            <div>
                <h1>Let's Throw a Party 🎉</h1>
                 <form onSubmit={this.submitInfo.bind(this)}>
                <input type="text" placeholder="title of party" ref="title"></input>
                <input type="text" placeholder="description" ref="description"></input>
                <input type="date" placeholder="date"  ref="date"></input>
                <input type="text" placeholder="Location" name="location" ref="location"></input>
                <button>Create Party</button>
                </form>
                
            </div>
        )
        
    }
}

export default CreateParty
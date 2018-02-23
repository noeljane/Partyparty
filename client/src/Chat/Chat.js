import React from 'react'

import axios from 'axios'
import socketIOClient from 'socket.io-client'

// const socket = openSocket('http://localhost:3001')
const socket = socketIOClient("http://localhost:8000")


class Chat extends React.Component {
    
    state = { 
        endpoint: "http://localhost:8000", 
        message:'',
        notes: [{note: "wassup", person: "sheila"}]
      }

    componentDidMount = () => {
        //Socket
        console.log('a user connected!')
        socket.on('letter-from-server', (data) => {
          this.setState({
               notes: [...this.state.notes, data]})
        })
    }

    // clickHandler = (letra) => {
    //     console.log(letra)
    //     console.log("I have been clicked")
    //     socket.emit('mmmbob', letra)
    // }
    
    submitHandler = (evt) =>{
        evt.preventDefault()
        console.log("submit button hit")
        
        var newNote = {
            note: this.refs.message.value, 
            person: this.refs.name.value
        }
        
        socket.emit('mmmbob', newNote)
       
        // socket.emit('mmmbob', (newNote) => {
            // this.setState({
            //     notes: [...this.state.notes, newNote]
            // })
        // })
    }

    render(){
        console.log(this.state.notes)
        return(
            <div>
            <h1>This is my chat, buddy</h1>
            <form>
                <input ref="message" placeholder="message"></input>
                <input ref="name" placeholder="name"></input>
                <button onClick={this.submitHandler.bind(this)}>Submit</button>
            </form>
           <h2>Chat!</h2>
            <ul>
            {this.state.notes.map((n)=>{
                return <li id={n.person}>{n.note} -{n.person}</li>
            })}
            </ul>
            </div>
        )
    }
}

export default Chat
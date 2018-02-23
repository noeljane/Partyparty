import React from 'react'

import axios from 'axios'
import socketIOClient from 'socket.io-client'

// const socket = openSocket('http://localhost:3001')
const socket = socketIOClient("http://localhost:8000")


class Chat extends React.Component {
    
    state = { 
        endpoint: "http://localhost:8000", 
        message:''
      }

    componentDidMount = () => {
        //Socket
        console.log('a user connected!')
        socket.on('letter-from-server', (data) => {
          this.setState({ message: data})
        })
    }

    clickHandler = (letra) => {
        console.log(letra)
        console.log("I have been clicked")
        socket.emit('mmmbob', letra)
    }
    
    submitHandler = (evt) =>{
        evt.preventDefault()
        console.log("submit button hit")
        
        var chat = {
            note: this.refs.message.value, 
            person: this.refs.name.value
        }
        console.log(chat)
        console.log(chat.note)
        console.log(chat.person)
        socket.emit('mmmbob', chat.note)
    }

    render(){
        console.log(this.state.message)
        return(
            <div>
            <h1>This is my chat, buddy</h1>
            <form>
                <input ref="message" placeholder="message"></input>
                <input ref="name" placeholder="noel"></input>
                <button onClick={this.submitHandler.bind(this)}>Submit</button>
            </form>
            <button onClick={this.clickHandler.bind(this, 'clicky')}>Click Me</button>
            <h1>{this.state.message}</h1>
            </div>
        )
    }
}

export default Chat
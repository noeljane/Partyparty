import React from 'react'

import axios from 'axios'
import socketIOClient from 'socket.io-client'

// const socket = openSocket('http://localhost:3001')
const socket = socketIOClient("http://localhost:8000")


class Chat extends React.Component {
    
    state = { 
        endpoint: "http://localhost:8000", 
        theletter:''
      }

    componentDidMount = () => {
        //Socket
        console.log('a user connected!')
        socket.on('letter-from-sever', (data) => {
          this.setState({ theletter: data})
        })
    }

    clickHandler = (letra) => {
        console.log("I have been clicked")
        socket.emit('mmmbob', letra)
    }

    render(){
        return(
            <div>
            <h1>This is my chat, buddy</h1>
            <button onClick={this.clickHandler.bind(this, 'a')}>Click Me</button>
                <h1>{this.state.theletter}</h1>
            </div>
        )
    }
}

export default Chat
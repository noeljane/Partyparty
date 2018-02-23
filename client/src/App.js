import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import UsersList from './Users/UsersList.js'
import UserProfile from './Users/UserProfile.js'

import axios from 'axios'
import openSocket from 'socket.io-client'

const socket = openSocket('http://localhost:3001')



class App extends Component {

  state = {
    users: [], 
    theletter: ''
  }

  //go to server and get information back
  componentDidMount = () => {
    //Socket
    
    console.log('a user connected!')
    socket.on('letter-from-sever', (data) => {
      this.setState({ theletter: data})
    })
    
    //User Index
    axios({method: 'get', url: '/users'})
      .then((res) => { 
        this.setState({
          users: res.data
        })
      })

    axios({method:'get', url: '/users/:id'})
      .then((res) => {
        this.setState({
          user: res.data
          
        })
      })


  }
  clickHandler(letra){
    console.log("I have been clicked")
    socket.emit('mmmbob', letra)
  }
  render() {
    return (
      <div className="App">
      <h1>Party Party!</h1>

      {/* List of Users */}
      <Route path='/users' render={()=>{
        return <UsersList users={this.state.users}
        />
      }}/>
      <button onClick={this.clickHandler.bind(this, 'a')}>Click Me</button>
      <h1>{this.state.theletter}</h1>

      {/* Individual Users */}  
      {/* <Route path="/users/:id" render={()}> */}

      {/* <Route path="/users/:id" render={(routeProps)=> {
          const userId =routeProps.match.params._id
          const user = user.find((u)=>{
            return u._id === userId
          })
          return <UserProfile />

      }} /> */}
 
        
      </div>
    );
  }
}

export default App;

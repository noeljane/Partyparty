import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import axios from 'axios'

import UsersList from './Users/UsersList.js'

class App extends Component {

  state = {
    users: []
  }

  componentDidMount = () => {
    //go to server and get information back
    axios({method: 'get', url: '/users'})
      .then((res) => { 
        this.setState({
          users: res.data
        })
      })
    axios({method:'post', url: '/users'})

  }
  render() {
    return (
      <div className="App">
      <h1>Party Party!</h1>
      <Route path='/users' render={()=>{
        return <UsersList users={this.state.users}
        />
      }}/>      
        
      </div>
    );
  }
}

export default App;

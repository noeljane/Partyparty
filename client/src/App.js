import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import UsersList from './Users/UsersList.js'
import UserProfile from './Users/UserProfile.js'
import Chat from './Chat/Chat.js'

import axios from 'axios'



class App extends Component {

  state = {
    users: []
  }

  //go to server and get information back
  componentDidMount = () => {
    //User Index
    axios({method: 'get', url: '/users'})
      .then((res) => { 
        this.setState({
          users: res.data
        })
      })
  }

  render() {
    return (
      <div className="App">
      <h1>Party Party!</h1>
      
      <Switch >
      {/* List of Users */}
      <Route exact path='/users' render={(props)=>{
        return <UsersList users={this.state.users}
        />
      }}/>
      

      {/* Individual Users */}  
      <Route path="/users/:id" render={(props) => {
        return <UserProfile user={props.match.params.id} />
      }}/>

      <Route path="/socket" render={(props) =>{
        return <Chat />
      }}/>
 
      </Switch> 
      </div>
    );
  }
}

export default App;

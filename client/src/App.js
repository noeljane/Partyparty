import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'

import UsersList from './Users/UsersList.js'
import UserProfile from './Users/UserProfile.js'
import LogIn from './Users/LogIn.js'
import SignUp from './Users/SignUp.js'

import Chat from './Chat/Chat.js'

import axios from 'axios'
import clientAuth from './clientAuth.js'



class App extends Component {

  state = {
    currentUser: null,
    users: []
  }

  //go to server and get information back
  componentDidMount = () => {

    //If user is signed in, this is who it is: 
    this.setState({
      currentUser: clientAuth.getCurrentUser()
    })

    //User Index
    axios({method: 'get', url: '/users'})
      .then((res) => { 
        this.setState({
          users: res.data
        })
      })
  }

  onLogin (user) {
    this.setState({
      currentUser: user
    })
  }
  
  onSignUp = (user)=> {
    this.setState({
      currentUser: user
    })
  }

  render() {
    const { currentUser } = this.state
    return (
      <div className="App">
      <h1>Party Party!</h1>
      
      {currentUser ? <h2>{currentUser.name}</h2> : null}
      
      
      <Switch >
        {/*LogIn Page*/}
        <Route exact path ='/login' render={(routerProps) => {
          return (
            <LogIn
              onLoginSuccess={this.onLogin.bind(this)}
              history={routerProps.history}
            />
          )
        }}/>
        {/*Sign Up Page*/}
        <Route exact path='/signup' render={(routerProps) => {
          return (
            <SignUp 
            onSignUpSuccess={this.onSignUp.bind(this)}
            history={routerProps.history}
            />
          )
        }}/>
        {/* List of Users */}
        <Route exact path='/users' render={(props)=>{
          return <UsersList users={this.state.users}
          />
        }}/>
        
        {/* Individual Users */}  
        <Route path="/users/:id" render={(props) => {
          return <UserProfile user={props.match.params.id} />
        }}/>

        {/*Chat*/}
        <Route path="/socket" render={(props) =>{
          return <Chat />
        }}/>
 
      </Switch> 
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'

//NavBar
import NavBar from './NavBar.js'

//Users
import UsersList from './Users/UsersList.js'
import UserProfile from './Users/UserProfile.js'
import LogIn from './Users/LogIn.js'
import SignUp from './Users/SignUp.js'
import LogOut from './Users/LogOut.js'
import clientAuth from './clientAuth.js'

//Parties
import PartyShow from './Parties/PartyShow.js'

//Messages
import Chat from './Chat/Chat.js'


class App extends Component {

  state = {
    currentUser: clientAuth.getCurrentUser()
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
  
  logOut() {
		clientAuth.logOut()
		this.setState({ currentUser: null })
	}

  render() {
    const { currentUser } = this.state
    return (
      <div className="App">
      <h1>Party Party!</h1>
      <NavBar currentUser={currentUser}/>
      
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
        
        {/*Log Out Page*/}
        <Route path='/logout' render={(routerProps) => {
          return (
            <LogOut onLogOut={this.logOut.bind(this)}/>
          )
        }}/>

        {/* List of Users */}
        <Route exact path='/users' render={(props)=> {
          return currentUser
              ? <UsersList />
            : <Redirect to="/login" />
        
        }}/>
        
        {/* Individual Users */}  
        <Route path="/users/:id" render={(routerProps) => {
          return currentUser
              ? <UserProfile user={currentUser} userId={routerProps.match.params.id}/>
              : <Redirect to="/login" /> 
        }}/>



        {/*Chat*/}
        <Route path="/chat" render={(routerProps) => {
          return currentUser
              ? <Chat user={currentUser}/>
              : <Redirect to="login" />
        }}/>


        {/* Party Show */}
        <Route path='/parties/:id' render={(routerProps) => {
            return currentUser
              ? <PartyShow  history={routerProps.history} currentUser={currentUser} partyId={routerProps.match.params.id}/>
              : <Redirect to="/login" />
        }}/>
 
      </Switch> 
      </div>
    );
  }
}

export default App;

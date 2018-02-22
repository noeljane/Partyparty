import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'

import axios from 'axios'

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

  }
  render() {
    return (
      <div className="App">
      This is the app
      { <Route path='/users' component={Users} users={this.state.users}/>
      
        
      </div>
    );
  }
}

export default App;

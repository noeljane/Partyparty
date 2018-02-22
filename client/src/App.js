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
      {/* <Route path='/users' component= */}
      
        {this.state.users.map((u)=>{
          return <li>{u.name}</li>
        })} 
      </div>
    );
  }
}

export default App;

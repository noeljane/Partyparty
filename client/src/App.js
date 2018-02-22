import React, { Component } from 'react';
import './App.css';

import axios from 'axios'

axios({method: 'get', url: '/api'})
  .then((res) => { console.log(res.data) })

class App extends Component {
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;

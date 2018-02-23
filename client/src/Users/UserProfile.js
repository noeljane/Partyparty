import React from 'react'
import axios from 'axios'

class UserProfile extends React.Component{
    
    state ={
        user: ''
    }
    
    componentDidMount = () => {
        axios({method:'get', url: `/users/${this.props.user}`})
        .then((res) => {
            this.setState({
                user: res.data
            })  

        })

    }
    render(){
        
        return(
            <div>
                <h1 id={this.state.user.id}>Hi! I'm {this.state.user.name}</h1>
                <h3>{this.state.user.name}</h3>
            </div>

        )
        
    }
    
}

export default UserProfile
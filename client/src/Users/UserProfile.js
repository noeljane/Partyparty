import React from 'react'
import axios from 'axios'

class UserProfile extends React.Component{
    
    componentDidMount = () => {
        //THIS DOESN'T WORK!!!!!
        axios({method:'get', url: `/users/${this.props.user}`})
        .then((res) => {
            this.setState({
                user: res.data
            })  

        })

        axios({method:'get', url: `/parties`})
            .then((res) =>{
                console.log(res.data)
                this.setState({
                    parties: res.data
                })
            })

    }
    render(){
        console.log(this.state.parties)
        return(
            <div>
                {/* This doesn't work!!! */}
                {/* <h1 id={this.state.user.id}>Hi! I'm {this.state.user.name}</h1>
                <h3>{this.state.user.name}</h3> */}
                <h1>My Parties!</h1>
               
            </div>

        )
        
    }
    
}

export default UserProfile
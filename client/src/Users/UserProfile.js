import React from 'react'
import axios from 'axios'

class UserProfile extends React.Component {
    state = {
        user: [],
        parties: []
    }
    
    componentDidMount = () => {
        //THIS DOESN'T WORK!!!!!
        console.log(this.props.user)
        axios({method:'get', url: `/users/${this.props.userId}`})
        .then((res) => {
            console.log(res)
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
        const { user } = this.state
        console.log(this.props)
        return(
            <div>
                {/* This doesn't work!!! */}
                <h1 id={this.state.user.id}>Hi! I'm {this.state.user.name}</h1> 
                <h3>{this.state.user.name}</h3>
                <h1>My Parties!</h1>
                <ul>
                    {this.state.parties.map((p)=>{
                        return (
                            <li> {p.title}</li>
                        )
                    })}
                </ul>
               
            </div>

        )
        
    }
    
}

export default UserProfile
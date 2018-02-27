import React from 'react'
import axios from 'axios'

class UsersList extends React.Component{
    state = {
        users: []
    }

    componentDidMount = () => {   
        //User Index
        axios({method: 'get', url: '/users'})
          .then((res) => { 
            this.setState({
              users: res.data
            })
          })
      }

    render(){
        return(
            <ul>
            {this.state.users.map((u)=>{
                return <li id={u._id}>
                <button>Invite</button>
                {u.name}
                </li>
            })} 
            </ul>

        )
    }
    
}

export default UsersList
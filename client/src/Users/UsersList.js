import React from 'react'
import axios from 'axios'

class UsersList extends React.Component{
    state = {
        users: [],
    }

    componentDidMount = () => {   
        //User Index
        axios({method: 'get', url: '/api/users'})
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
                {u._id}
                </li>
            })} 
            </ul>

        )
    }
    
}

export default UsersList
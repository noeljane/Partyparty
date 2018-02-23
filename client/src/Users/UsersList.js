import React from 'react'

class UsersList extends React.Component{
    
    render(){
        return(
            <ul>
            {this.props.users.map((u)=>{
                return <li id={u._id}>{u.name}</li>
            })} 
            </ul>

        )
    }
    
}

export default UsersList
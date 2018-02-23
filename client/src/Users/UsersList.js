import React from 'react'

class UsersList extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <ul>
            {this.props.users.map((u)=>{
                return <li>{u.name}</li>
            })} 
            </ul>

        )
    }
    
}

export default UsersList
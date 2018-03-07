import React from 'react'
import clientAuth from '../clientAuth.js'
import './Login.css'

class LogIn extends React.Component{
    state = {
        fields: { 
            email: '', 
            password: ''}
    }

    

    onInputChange = (evt) => {
        this.setState({
            fields: {
                ...this.state.fields, 
                [evt.target.name] : evt.target.value
            }
        })
    }

    onFormSubmit = (evt) => {
        evt.preventDefault()
        clientAuth.logIn(this.state.fields).then(user => {
            this.setState({
                fields: { 
                    email: '',
                    password: '' 
                }
                })
            if(user) {
                this.props.onLoginSuccess(user)
                this.props.history.push(`/users/${this.props.currentUser}`)
            }
        })
    }

    render (){
        const { email, password } = this.state.fields
        return (
            <div>
                <img alt="man with mustache blows confetti" src="https://media0.giphy.com/media/s2qXK8wAvkHTO/giphy.gif" />

                <div id="login-form">
                
                <h1>Log In</h1>
                    
                    <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
                
                    <div className="col-sm-12">
                        <label for="exampleInputEmail1">Email address</label>
                        <input id="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email" name="email" ref={email}
                        />
        
                    </div>
                    
                    <div className="col-sm-12">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" ref="password" name="password" value={password}></input>
                        
                    </div>
                    <div className="col-auto my-12" id="login-submit-button">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                   
                    </form>
                </div> 
             
            </div>
        )
    }
}

export default LogIn
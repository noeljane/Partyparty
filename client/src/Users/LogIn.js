import React from 'react'
import clientAuth from '../clientAuth.js'

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
                this.props.history.push('/')
            }
        })
    }

    render (){
        const { email, password } = this.state.fields
        return (
            <div>
                <img src="https://media0.giphy.com/media/s2qXK8wAvkHTO/giphy.gif" />

                <div>
                <h1>Log In</h1>
                <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email" name="email" ref={email}
                        />
        
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" ref="password" name="password" value={password}></input>
                        
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>

                
            </div>
        )
    }
}

export default LogIn
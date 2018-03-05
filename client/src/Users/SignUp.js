import React from 'react'
import clientAuth from '../clientAuth.js'

class SignUp extends React.Component {
    state = {
        fields: {
            name: '', 
            email: '',
            password: ''
        }
    }

    onInputChange (evt) {
        evt.preventDefault()
        this.setState({
            fields: {
                ...this.state.fields, 
                [evt.target.name] : evt.target.value
            }
        })

    }

    onFormSubmit(evt) {
        evt.preventDefault()
        clientAuth.signUp(this.state.fields).then(user => {
            this.setState({ fields: {name: '', email: '', password: '' } })
            if(user) {
                this.props.onSignUpSuccess(user)
                this.props.history.push('/')
            }
        })

    }
    render() {
        const { name, email, password } = this.state.fields
        console.log(this.state.fields.email)
        console.log(this.state.fields.password)
        return (
            
            <div>
                <h1>Sign Up to make more parties!</h1>


                <div id="signup-form">
                    
                    <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>

                    <div className="col-sm-12">
                        <label for="exampleInputName">Name</label>
                        <input id="name" type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="name" name="name" value={name}
                        />
        
                    </div>
                
                    <div className="col-sm-12">
                        <label for="exampleInputEmail1">Email address</label>
                        <input id="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email" name="email" value={email}
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

export default SignUp
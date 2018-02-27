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
                <form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
                    <input type="text" placeholder="Name" name="name" value={name}/>
                    <input type="text" placeholder="Email" name="email" value={email}/>
                    <input type="text" placeholder="Password" name="password" value={password}></input>
                    <button>Sign Up</button>
                </form>
            </div>
        )
    }
}

export default SignUp
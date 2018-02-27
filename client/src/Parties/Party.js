import React from 'react'
import axios from 'axios'

class Party extends React.Component {
    state = {
        fields: {
            title: '', 
            description: '', 
            date: '',
            location: ''

        }, 
        parties: []
    }
    componentDidMount(){
        axios({method: 'get', url:'/parties'})
        .then((res) => {
            console.log(res.data)
            this.setState({
                parties: res.data
            })
        })

    }
    // enterInfo = (evt) =>  {
        
    //     this.setState({
    //         fields: { 
    //                 title: this.refs.title.value, 
    //                 description: this.refs.description.value, 
    //                 date: this.refs.date.value, 
    //                 location: this.refs.location.value
    //             }
            
    //     })
    // }

    submitInfo = (evt) => {
        evt.preventDefault()
        console.log(this.refs.title.value)
        axios({
            method: 'post', 
            url: '/parties', 
            data: {
                title: this.refs.title.value, 
                description: this.refs.description.value, 
                date: this.refs.date.value,
                location: this.refs.location.value
                }
        }).then((res) => {     
                this.setState({
                    parties: [...this.state.parties, res.data]
                })
            
        })

       
    }

    // componentDidMount(){
    //     axios({method: 'get', url:'/parties'})
    //     .then((res) => {
    //         console.log(res.data)
    //         this.setState({
    //             parties: res.data
    //         })
    //     })

    // }

   


    render (){
        console.log(this.refs)
        // console.log(this.state.fields)
        // const { title, description, date, location } = this.state.fields
        return(
            <div>
                <h1>This is a party, man</h1>
                 <form onSubmit={this.submitInfo.bind(this)}>
                <input type="text" placeholder="title of party" ref="title"></input>
                <input type="text" placeholder="description" ref="description"></input>
                <input type="date" placeholder="date"  ref="date"></input>
                <input type="text" placeholder="Location" name="location" ref="location"></input>
                <button>Create Party</button>
                </form>
            </div>
        )
    }
}

export default Party
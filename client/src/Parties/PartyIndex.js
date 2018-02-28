import React from 'react'
import clientAuth from '../clientAuth.js'

class PartyIndex extends React.Component {
    state = {
        parties: [], 
        
    }
    
    componentDidMount(){
        clientAuth.getParties().then(res => {
            this.setState({
                parties: res.data.reverse()
            })
        })
    }

    submitParty(evt){
        evt.preventDefault()
        const fields = {
            title: this.refs.title.value, 
            description: this.refs.description.value, 
            date: this.refs.date.value,
            location: this.refs.location.value

        }
        clientAuth.createParty(fields).then(res => {
            if(res.data.success) {
                this.setState({
                    parties:[res.data.party, ...this.state.parties]
                })
                this.refs.title.value = ''
                this.refs.description.value = ''
                this.refs.date.value = ''
                this.refs.location.value = ''
            }
        })
    }

    
    
    // handleEditSubmit (evt){
    //     evt.preventDefault()
    //     const fields = {
    //         title: this.refs.editTitle.value, 
    //         description: this.refs.editDescription.value, 
    //         date: this.refs.editDate.value,
    //         location: this.refs.editLocation.value

    //     }
    //     clientAuth.updateParty(this.state.partyBeingEdited, fields).then(res => {
    //         this.setState({
    //             parties: this.state.parties.map((p) =>{
    //                 if(p._id === res.data.party._id) return res.data.party
    //                 return p
    //             }),

    //             partyBeingEdited: null

    //         })
    // //     })

    // }

    render (){
        console.log(this.state)
        return (
            <div id="allDemParties">
                

                 <div id="create-parties">
        
                    <h1>Let's Throw a Party </h1>
                    <form onSubmit={this.submitParty.bind(this)}>
                        <input type="text" placeholder="title of party" ref="title"></input>
                        <input type="text" placeholder="description" ref="description"></input>
                        <input type="date" placeholder="date"  ref="date"></input>
                        <input type="text" placeholder="Location" name="location" ref="location"></input>
                    <button>Create Party</button>
                    </form>
                    
                </div>

                <div id="my-parties">
                    <h1> Parties I made: </h1>
                    <ul>
                        {this.state.parties.map((p)=> {
                            // return p._id === this.state.partyBeingEdited
                            // ? (
                            //     <form key={p._id} onSubmit={this.handleEditSubmit.bind(this)}>
                            //         <input type="text" defaultValue={p.title} ref="editTitle"></input>
                            //         <input type="text" defaultValue={p.description} ref="editDescription"></input>
                            //         <input type="date" defaultValue={p.date}  ref="editDate"></input>
                            //         <input type="text" defaultValue={p.location} name="location" ref="editLocation"></input>
                            //         <button>Update</button>
                            //     </form>
                            // )
                            // : (
                            return(
                                <li key={p._id} > {p.title} Id: {p._id}
                                </li>
                            )
                            
                        })}
                    </ul> 
                    </div>
                    


            </div>

        )
    }
}

export default PartyIndex
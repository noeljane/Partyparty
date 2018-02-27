import React from 'react'
import axios from 'axios'

class Party extends React.Component {
    render (){
        return(
            <div>
                <h1>This is a party, man</h1>
                <form>
                <input placeholder="title of party"></input>
                <input placeholder="description"></input>
                <input placeholder="date"></input>
                <input placeholder="Location"></input>
                <button>Create Party</button>
                </form>
            </div>
        )
    }
}

export default Party
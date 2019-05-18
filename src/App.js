import React, {Component} from 'react'
import './App.css'

import axios from 'axios'

class App extends Component {
    constructor() {
        super();

        this.state = {
            data: {
                uuid: '',
            },
        };

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        axios.get('http://localhost:8085/dog/fake-dog-uuid', {
            responseType: 'json'
        }).then(response => {
            this.setState({data: response.data.data});
        });
    }

    render() {
        const customData = this.state.data;

        return (
            <div className='button__container'>
                <button className='button' onClick={this.handleClick}>
                    Click Me
                </button>
                <p>Dog Id: {customData.uuid}</p>
            </div>
        )
    }
}

export default App

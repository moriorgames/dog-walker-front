import React, {Component} from "react";
import axios from 'axios'

class HomeHandler extends Component {
    constructor() {
        super();

        this.state = {
            data: {
                uuid: '',
                name: '',
            },
        };

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        axios.get('http://localhost:8080/dog/fake-dog-uuid', {
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

export default HomeHandler

import React from 'react';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            data: {
                uuid: '',
            },
        };
    }

    render() {
        const customData = this.state.data;

        return (
            <div>
                <h2>Moriorgames, hello world!!!</h2>
                <div>Dog Id: {customData.uuid}</div>
            </div>
        );
    }

    componentDidMount() {
        axios.get('http://localhost:8085/dog/fake-dog-uuid', {
            responseType: 'json'
        }).then(response => {
            this.setState({data: response.data.data});
        });
    }
}

export default App;

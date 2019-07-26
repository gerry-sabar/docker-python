import React, {Component} from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        console.log('Mounted');
        fetch('http://localhost:5000/api/v1/categories')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            })
    }

    render() {
        var {isLoaded, items} = this.state;
        if (!isLoaded) {
            return <div>Loading data... </div>
        } else {
            return (
                <div className="app">
                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                                Name: {item.id} | {item.title}
                            </li>
                        ))
                        }
                    </ul>
                </div>
            )
        }
    }
}

export default App;

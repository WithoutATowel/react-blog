import React, {Component} from 'react';
const axios = require('axios');

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shakespeare: ''
        }
    }

    componentDidMount() {

        let poemApi = 'http://ShakeItSpeare.com/api/poem'
        
        // our fetch of that poemApi
        // fetch(poemApi)
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then((json) => {
        //         base.setState({ shakespeare: json.poem });
        //     })
        //     .catch((error) => {
        //         console.log('An error occurred while parsing:', error);
        //     });

        axios.get(poemApi)
            .then((response) => {
                console.log(response);
                this.setState({ shakespeare: response.data.poem });
            })
            .catch((error) => {
                console.log('An error occurred while parsing:', error);
            })

            // axios({
            //     method: 'GET',
            //     url: poemApi
            // })
            // .then((response) => {
            //     this.setState({ shakespeare: response.data.poem })
            // })
    }

    render() {

        let poetry = ''

        if(this.state.shakespeare) {
            poetry = this.state.shakespeare;
        } else {
            poetry = "Loading..."
        }

        return (
            <div className='container'>
                <h1>This is my homepage</h1>
                <h2>My favorite Shakespeare poem:</h2>
                <p>{poetry}</p>
            </div>
        )
        
    }
}

export default Home;
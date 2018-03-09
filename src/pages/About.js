import React, { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props)
        this.state = {
            city: 'none',
            weather: 'unknown',
            temperature: 0,
            highTemp: 0,
            lowTemp: 0
        }
    }

    weatherChecker = (e, zip) => {
        if(e) { e.preventDefault(); }

        let weatherApi = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=052f26926ae9784c2d677ca7bc5dec98&units=imperial`;

        fetch(weatherApi)
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                console.log(response);
                this.setState({ 
                    city: response.name,
                    weather: response.weather[0].main,
                    temperature: response.main.temp,
                    highTemp: response.main.temp_max,
                    lowTemp: response.main.temp_min
                });
            })
            .catch((error) => {
                console.log('An error occurred while parsing:', error);
            });
    }

    componentDidMount() { 
        this.weatherChecker(null, 98107);
    }

    render () {
        
        return (
            <div className='container'>
                <h1>About Me</h1>
                <form onSubmit={ (e) => this.weatherChecker(e, this.refs.zipcode.value) }>
                    <label>Actually, nvm talking about me. Let's check the weather:</label><br />
                    <input ref='zipcode' type='text' placeholder='Enter a zipcode' />
                    <input type='submit' value='Check weather' />
                </form>

                <div className='weather-container'>
                    <div className='inner-weather'>
                        <h4>{this.state.city}</h4>
                        <h6>{this.state.weather}</h6>
                        <h1>{this.state.temperature}</h1>
                        <p>High: {this.state.highTemp}, Low: {this.state.lowTemp}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
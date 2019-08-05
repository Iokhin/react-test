import React from 'react';
import BoilerVerdict from "./BoilerVerdict";
import TemperatureInput from "./TemperatureInput";

export default class BoilerCalculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '',
            scale: 'c'
        };
    }

    toFahrenheit = (temperature) => {
        return temperature * 9 / 5 + 32;
    };

    toCelsius = (temperature) => {
        return (temperature - 32) * 5 / 9;
    };

    tryConvert = (temperature, convert) => {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input);
        const round = Math.round(output * 1000) / 1000;
        return round.toString();
    };

    handleCelsiusChange = (temperature) => {
        this.setState({
            scale: 'c',
            temperature
        });
    };

    handleFahrenheitChange = (temperature) => {
        this.setState({
            scale: 'f',
            temperature
        });
    };

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? this.tryConvert(temperature, this.toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? this.tryConvert(temperature, this.toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput scale="c" value={celsius} onChange={this.handleCelsiusChange}/>
                <TemperatureInput scale="f" value={fahrenheit} onChange={this.handleFahrenheitChange}/>
                <BoilerVerdict temperature={parseFloat(celsius)} />
            </div>
        );
    }
}
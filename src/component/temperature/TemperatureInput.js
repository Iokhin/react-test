import React from 'react';

const scaleName = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

export default class TemperatureInput extends React.Component {
    handleChange = (e) => {
        this.props.onChange(e.target.value);
    };

    render() {
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Input temperature in {scaleName[scale]}</legend>
                <input type="text" value={this.props.value} onChange={this.handleChange}/>
            </fieldset>
        );
    };
}
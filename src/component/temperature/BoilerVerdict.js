import React from 'react';

export default class BoilerVerdict extends React.Component {
    render() {
        if (this.props.temperature >= 100) {
            return (
                <h2>WATER WILL BOIL</h2>
            );
        }
        return (
              <h2>WATER WILL NOT BOIL</h2>
        );
    }
}
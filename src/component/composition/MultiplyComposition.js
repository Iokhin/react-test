import React from 'react';
import './style.css';
import WelcomeMessage from "./WelcomeMessage";

class MultiplyComposition extends React.Component {
    render() {
        return (
            <div className="MultiplyComposition">
                <div className="First">
                    {this.props.first}
                </div>
                <div className="Second">
                    {this.props.second}
                </div>
            </div>
        );
    }
}

export default class MultiplyCompositionMessage extends React.Component {
    render() {
        return (
            <MultiplyComposition first={<WelcomeMessage/>} second={<WelcomeMessage/>}/>
        );
    }
}
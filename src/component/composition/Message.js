import React from 'react';
import Border from "./Border";

export default class Message extends React.Component {
    render() {
        return (
            <Border>
                <h1>{this.props.title}</h1>
                <p>{this.props.message}</p>
            </Border>
        );
    }
}
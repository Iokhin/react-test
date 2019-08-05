import React from 'react';
import './style.css'

export default class Border extends React.Component {
    render() {
        return (
            <div className="Border">
                {this.props.children}
            </div>
        );
    }
}
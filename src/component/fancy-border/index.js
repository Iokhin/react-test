import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const FancyBorder = (props) => {
    return(
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
};

const Dialog = (props) => {
    return(
        <FancyBorder color={'red'}>
            <h1>{ props.title }</h1>
            <p>{ props.message }</p>
            { props.children }
        </FancyBorder>
    );
};

class WelcomeDialog extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            login: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    };

    handleChange(e) {
        this.setState({login: e.target.value})
    }

    handleButtonClick() {
        alert('Welcome, ' + this.state.login);
    }

    render() {
        return(
            <Dialog title={"Welcome"} message={"QUQ"}>
                <input value={this.state.login} onChange={this.handleChange}/>
                <button onClick={this.handleButtonClick}>
                    Enter
                </button>
            </Dialog>
        );
    }
}

ReactDOM.render(<WelcomeDialog />, document.getElementById('root'));


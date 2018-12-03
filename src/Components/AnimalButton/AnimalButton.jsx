import React, { Component } from 'react';
import { WithRouter } from 'react-router-dom';

class AnimalButton extends Component {

    handleClick = () => {
        alert('you are headed to animals');
        // change location
        console.log(this.props.history);
        this.props.history.push('/animals');

    }

    render() {
        return (
            <button onClick={this.handleClick}>Change Location</button>
        )
    }
}

export default withRouter(AnimalButton);
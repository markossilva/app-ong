import React from 'react';

export default class TButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button
                onClick={this.props.onClick}>
                {this.props.label}
            </button>
        );
    }
}
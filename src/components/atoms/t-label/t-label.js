import React from 'react';

export default class TLabel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <label>{this.props.label}</label>
        );
    }
}
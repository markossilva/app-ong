import React from 'react';
import TLabel from '../../atoms/t-label/t-label';

export default class TGreeting extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>
                <TLabel label={this.props.label} />
            </h1>
        );
    }
}
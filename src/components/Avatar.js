import React from 'react';

export default class Avatar extends React.Component {

    constructor(props) {
        super(props);
        const initState = { date: new Date() };
        this.state = initState;
    }

    tick() {
        const state = {
            date: new Date()
        }
        this.setState(state)
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    render() {
        return (
            <div>
                <img className="Avatar"
                    src={this.props.user.avatarUrl}
                    alt={this.props.user.name}
                />
                <h2>{this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
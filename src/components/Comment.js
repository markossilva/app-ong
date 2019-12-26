import React from 'react';
import UserInfo from './UserInfo';
import Toggle from './Toggle';

export default class Comment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Comment">
                <UserInfo author={this.props.author} />
                <div className="Comment-text">
                    {this.props.text}
                </div>
                <div className="Comment-date">
                    {this.props.date}
                </div>
                <Toggle />
            </div>
        );
    }
}
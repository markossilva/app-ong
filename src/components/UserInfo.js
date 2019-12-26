import React from 'react';
import Avatar from './Avatar'

export default class UserInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="UserInfo">
                <Avatar user={this.props.author} />
                <div className="UserInfo-name">
                    {this.props.author.name}
                </div>
            </div>
        );
    }
}
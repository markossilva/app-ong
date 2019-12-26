import React from 'react';
import TButton from '../../atoms/t-button/t-button';
import TGreeting from '../../organismis/t-greeting/t-greeting';

export default class TLogin extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        return (
            <div>
                <TGreeting
                    isLoggedIn={isLoggedIn}
                    label={isLoggedIn === true ? "Welcome Back!" : "Please sign up."} />
                <TButton
                    label={isLoggedIn === true ? "Logout" : "Login"}
                    onClick={isLoggedIn === true ? this.handleLogoutClick : this.handleLoginClick} />
            </div>
        );
    }
}
import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import DrawerToggleButton from './DrawerToggleButton';
import { clearAuth } from '../../actions/auth';
import { clearAuthToken } from '../../local-storage';
import { clearContacts } from '../../actions/contacts-actions';
import { clearFavorites } from '../../actions/favorite-actions';

import '../../components/styles/Navbar.css';

export class Navbar extends React.Component {
    logOut() {
        this.props.dispatch(clearAuth());
        this.props.dispatch(clearContacts());
        this.props.dispatch(clearFavorites());
        clearAuthToken();
    }

    render() {

        // Only render the log out button if we are logged in
        let logOutButton;
        let accountButton;
        let loginButton;
        let registerButton;

        if (this.props.loggedIn) {
            logOutButton = (
                <a className="logout-button blue push_button" onClick={() => this.logOut()}>Log out</a>
            );
            accountButton = (
                <li><Link to="/account">Account</Link></li>
            );
        } else {
            loginButton = (
                <li><Link to="/login">Login</Link></li>
            );
            registerButton = (
                <li><Link to="/register">Signup</Link></li>
            );
        }

        return (
            <React.Fragment>
                <header className="navbar">
                    <nav className="navigation">
                        <div className="spacer-half"></div>
                        <div className="logo"><Link className="logo" to="/">CC</Link></div>
                        <div className="spacer"></div>
                        <div className="toggle-button">
                            <DrawerToggleButton />
                        </div>
                        <div className="spacer-half"></div>
                        <div className="navigation-items">
                            <ul>
                                <li><Link to="/concerts">Concerts</Link></li>
                                {accountButton}
                                {loginButton}
                                {registerButton}
                                {!this.props.loggedIn ? <Redirect to='/' /> : ''}
                                <li className="sharethis-inline-share-buttons"></li>
                                {logOutButton}
                            </ul>
                        </div>
                        
                    </nav>
                </header>
            </React.Fragment>

        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(Navbar);

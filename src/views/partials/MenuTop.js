import React, { Component } from 'react'
import { GoogleLogout } from 'react-google-login';
import { googleClientId, reportLogout } from '../helpers';

export class UserPanel extends Component {
    render() {
        return (
            <div className="u-flex-12/12 u-padding-big u-padding-horizontal-great u-text--right u-text--smallest u-bg-color--6 u-font-color--3">
                <a className="o-link u-margin-right-great">RODO</a>
                <a className="o-link u-margin-right-great">Polityka prywatności</a>
                <GoogleLogout
                clientId={googleClientId}
                buttonText="Wyloguj"
                onLogoutSuccess={reportLogout}
                render={renderProps => (
                    <a className="o-link" onClick={renderProps.onClick} disabled={renderProps.disabled}>Wyloguj</a>
                )}
                >
                </GoogleLogout>
            </div>
        )
    }
} 

export default UserPanel

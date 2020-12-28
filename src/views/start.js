import React from "react";
// import google from '../img/google.png';
// import {logIn, logInGoogle, GoogleLogin} from './helpers'
import { GoogleLogin } from 'react-google-login';

const responseGoogle = (response) => {
    console.info(response);
}


class Start extends React.Component {
    render () {
        return (            
            <section className="o-section o-section--full c-start o-flex o-flex--centered o-flex--grids o-flex--wrap u-padding-none">
                <div className="c-start__image o-flex__item u-flex-7/12"></div>
                <div className="c-start__container o-flex__item u-flex-5/12 o-flex o-flex--centered">
                    {/* Top Right Menu */}
                    <div className="c-menu--top">
                    <div className="c-heading c-heading--h3 u-font-color--3 u-text--bold u-margin-none">SMART Evolution</div>
                    </div>

                    {/* Floating Content */}
                    <div className="o-wrapper c-start__content u-bg-color--1">
                        <p className="c-heading c-heading--h0 u-margin-bottom-huge u-font-color--1 u-text--thin">
                            Przemień marzenia w plan
                        </p>
                        <p className="c-heading c-heading--h3 u-text--normal u-text--uppercase">
                            Wykreuj rzeczywistość dla siebie
                        </p>
                        <p className="c-heading c-heading--h3 u-text--normal u-text--uppercase u-margin-bottom-none">
                            i ciesz się życiem, jakiego chciałeś
                        </p>
                    
                        {/* Log-in Buttons */}
                        <div className="c-start__buttons u-position-relative">
                            <GoogleLogin
                                clientId="850157239961-g16l5ifn3btccslaogvpicf7umrbrubd.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Start;
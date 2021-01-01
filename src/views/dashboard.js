import React from "react";
import LifeGraph from './lifeChart';
import { GoogleLogout } from 'react-google-login';
import { clientId, reportLogout } from './helpers';

class Dashboard extends React.Component {
    render () {
        return (            
            <section className="c-dashboard o-flex o-flex--wrap o-flex--space-between u-padding-none u-bg-color--6 o-flex--lock-top">
                <div className="u-flex-12/12 u-padding-big u-padding-horizontal-great u-text--right u-text--smallest u-bg-color--6 u-font-color--3">
                    <a className="o-link u-margin-right-great">RODO</a>
                    <a className="o-link u-margin-right-great">Polityka prywatności</a>
                    <GoogleLogout
                        clientId={clientId}
                        buttonText="Wyloguj"
                        onLogoutSuccess={reportLogout}
                        render={renderProps => (
                            <a className="o-link" onClick={renderProps.onClick} disabled={renderProps.disabled}>Wyloguj</a>
                        )}
                    >
                    </GoogleLogout>
                </div>
                <div className="u-flex-3/12 u-padding-horizontal-big">
                    <div className="c-card u-padding-great o-flex o-flex--start o-flex--column">
                        <h3 className="u-text--center u-margin-bottom-tiny">Twoje życiowe cele</h3>
                        <p className="u-text--center u-text--smaller">Przeglądaj je codziennie, aby pamiętać<br></br>do czego dążysz i jak to osiągnąć</p>
                        <ul className="c-list u-flex-12/12 u-margin-bottom-none">
                            <li className="c-list__item">Sprzedawać odzież własnej marki</li>
                            <li className="c-list__item">Osiedlić się w Tajlandii</li>
                            <li className="c-list__item">Władać płynnie pięcioma językami</li>
                            <li className="c-list__item">Mieć tytuł mistrza szachowego</li>
                            <li className="c-list__item">Zbudować dom</li>
                            <li className="c-list__item">Założyć rodzinę z dwójką dzieci</li>
                            <li className="c-list__item">Zwiedzić cały świat</li>
                        </ul>
                    </div>
                </div>
                <div className="u-flex-6/12 o-flex o-flex--centered-h">
                    <div className="c-card u-padding-great o-flex o-flex--start o-flex--column">
                        <h3 className="u-text--left u-margin-bottom-tiny">Plan realizacji: Sprzedawać odzież własnej marki</h3>
                        <p className="u-text--left">Twój plan to gwarancja osiągnięcia zamierzonego celu. Przemyśl realizację zgodnie z metodologią SMART, następnie wypisz wszystkie kroki i zacznij działać.</p>
                        <ul className="c-list u-flex-12/12 u-margin-bottom-none">
                            <li className="c-list__item">Nawiązać znajomość z projektantem odzieży</li>
                            <li className="c-list__item">Nawiązać znajomość z dystrybutorem</li>
                            <li className="c-list__item">Wyszukać w internecie fabryki odzieży</li>
                            <li className="c-list__item">Wykonać telefon dla zorientowania w kosztach produkcji</li>
                            <li className="c-list__item">Kolejny krok</li>
                            <li className="c-list__item">Kolejny krok</li>
                        </ul>
                    </div>
                </div>
                <div className="u-flex-3/12 u-padding-horizontal-big">
                    <div className="c-card u-padding-big o-flex o-flex--centered-v u-margin-bottom-big">
                        <img className="c-nav__picture u-margin-right" src={'s'}></img>
                        <strong>{'s'}</strong>
                    </div>

                    <div className="c-card c-card--info c-card--white u-padding-big o-flex o-flex o-flex--wrap">
                        <h3 className="o-flex u-text--left u-margin-bottom-tiny">Koło życia</h3>
                        <div className="o-flex" style={{margin: '30px auto'}}>
                                <LifeGraph/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Dashboard;
import React, { Component } from 'react'
import LifeGraph from './lifeChart';
import { user } from '../helpers';
import Header from '../commons/Header';

export class UserProfile extends Component {
    render() {
        return (
            <div className="u-flex-3/12 u-padding-horizontal-big c-user-profile">
                <div className="c-card u-padding-big u-padding-horizontal-great o-flex o-flex--centered-v u-margin-bottom-big">
                    <img className="c-nav__picture u-margin-right fadeOnStart" src={user.profileObj.imageUrl}></img>
                    <strong>{user.profileObj.name}</strong>
                </div>
                <div className="c-card c-card--info c-card--white u-padding-great o-flex o-flex o-flex--wrap">
                    <Header 
                        title="Koło życia" 
                        desc="Koło powstało na podstawie Twoich odpowiedzi w ankiecie. Obrazuje obszary życia, nad którymi powinieneś popracować, aby utrzymać równowagę w życiu. Poziom wartości powinien być wyrównywany i stopniowo zwiększany w każdej ze sfer."
                    />
                    <div className="o-flex" style={{ margin: '0 auto 0 auto' }}>
                    {this.props.displayGraph ? <LifeGraph 
                        displaySurvey={this.props.displaySurvey}
                    /> : false}
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile

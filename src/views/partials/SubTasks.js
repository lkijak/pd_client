import React, { Component } from 'react'
import Header from '../commons/Header';
import Progress from '../commons/Progress';
import TextInput from '../commons/TextInput';

export class SubTasks extends Component {
    render() {
        return (
            <div className="u-flex-5/12 u-padding-horizontal-big">
                <div className="c-card u-padding-great o-flex o-flex--start o-flex--column">
                    <Header 
                        title="Plan: Sprzedawać odzież własnej marki" 
                        desc="Twój plan to gwarancja osiągnięcia zamierzonego celu. Przemyśl realizację zgodnie z metodologią SMART, następnie wypisz wszystkie kroki i zacznij działać."
                    />
                    <Progress completed={65} />
                    <TextInput label="Dodaj nowy krok" />
                    <ul className="c-list u-flex-12/12 u-margin-bottom-none">
                        <li className="c-list__item">Nawiązać znajomość z projektantem odzieży</li>
                        <li className="c-list__item">Nawiązać znajomość z dystrybutorem</li>
                        <li className="c-list__item">Wyszukać w internecie fabryki odzieży</li>
                        <li className="c-list__item done">Wykonać telefon dla zorientowania w kosztach produkcji</li>
                        <li className="c-list__item done">Kolejny krok</li>
                        <li className="c-list__item done">Kolejny krok</li>
                    </ul>
                </div>
            </div>
        )
    }
} 

export default SubTasks

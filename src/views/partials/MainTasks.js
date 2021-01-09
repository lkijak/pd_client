import React, { Component } from 'react'
import Header from '../commons/Header';
import Progress from '../commons/Progress';
import TextInput from '../commons/TextInput';

export class MainTasks extends Component {
    render() {
        return (
            <div className="u-flex-4/12 o-flex o-flex--centered-h">
                <div className="c-card u-padding-great o-flex o-flex--start o-flex--column">
                    <Header 
                        title="Twoje życiowe cele" 
                        desc="Przeglądaj swoje marzenia codziennie, aby pamiętać do czego dążysz i jak to osiągnąć."
                    />
                    <Progress completed={15} />
                    <TextInput label="Dodaj nowy cel" />
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
        )
    }
} 

export default MainTasks
import React, { Component } from 'react'
import Header from '../commons/Header';
import Progress from '../commons/Progress';
import TextSubInput from '../commons/TextSubInput';
import Task from '../commons/Task';
import { MarkunreadSharp } from '@material-ui/icons';

export class SubTasks extends Component {

  render() {
    return (
      <div className={`u-flex-1/2 u-padding-horizontal-big ${this.props.isVisible ? 'is-active' : 'u-hidden'}`}>
        <div className="c-card u-padding-great o-flex o-flex--start o-flex--column">
          <Header
            title={`Plan: ${this.props.parentName}`}
            desc="Twój plan to gwarancja osiągnięcia zamierzonego celu. Przemyśl realizację zgodnie z metodologią SMART, następnie wypisz wszystkie kroki i zacznij działać."
          />
          <Progress completed={65} />
          <TextSubInput label="Dodaj nowy krok" createTask={this.props.createTask} parentId={this.props.parentId} updateValue={this.props.updateValue} />
          <ul className="c-list u-flex-12/12 u-margin-bottom-none list-scrolling">
            {this.props.readyForTask && this.props.userSubtasks.map((task) => {
                return <Task 
                  task={task} 
                  key={Math.floor(Math.random() * Math.floor(3000))} 
                  id={Math.floor(Math.random() * Math.floor(3000))} 
                  title={task.name} 
                  completed={task.isCompleted} 
                  isMainTask={"false"}
                />
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default SubTasks

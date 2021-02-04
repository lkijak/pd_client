import React, { Component } from 'react'
import Header from '../commons/Header';
import Progress from '../commons/Progress';
import TextSubInput from '../commons/TextSubInput';
import Task from '../commons/Task';
import { MarkunreadSharp } from '@material-ui/icons';

export class SubTasks extends Component {

  calculateCompleted = () => {
    let completed = this.props.userSubtasks.filter((obj) => obj.isCompleted === true).length;
    let len = this.props.userSubtasks.length;
    let calc = Math.floor(completed / len * 100);
    if (!calc) {
      calc = 0;
    }
    return calc;
  }

  render() {
    return (
      <div className={`u-flex-1/2 u-padding-horizontal-big ${this.props.isVisible ? 'is-active' : 'u-hidden'}` + " c-subtasks"}>
        <div className="c-card u-padding-great o-flex o-flex--start o-flex--column high-card">
          <Header
            title={`Plan: ${this.props.parentName}`}
            desc="Twój plan to gwarancja osiągnięcia zamierzonego celu. Przemyśl realizację zgodnie z metodologią SMART, następnie wypisz wszystkie kroki i zacznij działać."
          />
          {this.props.readyForTask && <Progress completed={this.calculateCompleted()} />}
          <TextSubInput 
            label="Dodaj nowy krok" 
            createSubTask={this.props.createSubTask} 
            parentId={this.props.parentId} 
            updateValue={this.props.updateValue} 
          />
          <ul className="c-list u-flex-12/12 u-margin-bottom-none list-scrolling">
            {this.props.readyForTask && this.props.userSubtasks.map((task) => {
                return <Task 
                  task={task} 
                  key={Math.floor(Math.random() * Math.floor(300000))} 
                  id={Math.floor(Math.random() * Math.floor(300000))} 
                  title={task.name} 
                  completed={task.isCompleted} 
                  isMainTask={false}
                  doneSubTask={this.props.doneSubTask}
                  archiveSubTask={this.props.archiveSubTask}
                  parentId={this.props.parentId}
                />
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default SubTasks

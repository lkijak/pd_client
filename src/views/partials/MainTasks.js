import React, { Component } from 'react'
import Header from '../commons/Header';
import Progress from '../commons/Progress';
import TextInput from '../commons/TextInput';
import Task from '../commons/Task';

export class MainTasks extends Component {

  calculateCompleted = () => {
    let completed = this.props.tasks.filter((obj) => obj.isCompleted === true).length;
    let len = this.props.tasks.length;
    let calc = Math.floor(completed / len * 100);
    if (!calc) {
      calc = 0;
    }
    return calc;
  }

  render() {
    return (
      <div className="u-flex-1/2 o-flex o-flex--centered-h c-maintasks">
        <div className="c-card u-padding-great o-flex o-flex--start o-flex--column high-card">
          <Header
            title="Twoje życiowe cele"
            desc="Przeglądaj swoje marzenia codziennie, aby pamiętać do czego dążysz i jak to osiągnąć."
          />
          {this.props.readyForTask && <Progress completed={this.calculateCompleted()} />}
          <TextInput label="Dodaj nowy cel" createTask={this.props.createTask} updateValue={this.props.updateValue} />
          <ul className="c-list u-flex-12/12 u-margin-bottom-none list-scrolling">
            {this.props.readyForTask && this.props.tasks.map((task) => {
              return <Task 
                task={task} 
                key={task.taskid} 
                id={task.taskid} 
                title={task.name} 
                completed={task.isCompleted} 
                chooseMainTask={this.props.chooseMainTask}
                doneTask={this.props.doneTask}
                archiveTask={this.props.archiveTask}
                isMainTask={true}
              />
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default MainTasks

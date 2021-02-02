import React, { Component } from 'react'
import MainTasks from './MainTasks';
import SubTasks from './SubTasks';
import axios from 'axios';
import { getUsername, API_DOMAIN } from '../helpers';

export class TaskBoard extends Component {

  state = {
    textField: "",
    readyForTask: null,
    tasks: null,
    visibleTask: null,
  }

  updateValue = (text) => {
    this.setState({ textField: text });
  }

  createTask = (e) => {
    if (e.key === 'Enter') {
      const userName = getUsername();

      axios.post(`${API_DOMAIN}/UserTask`, {
        name: this.state.textField,
        isCompleted: false,
        isArchiwed: false,
        userName: userName
      },
        {
          'Content-Type': 'application/json'
        })
        .then((response) => {
          console.log("Wysłano dane do utworzenia głównego celu.", response);
          this.getMainTasks();
        })
        .catch((error) => {
          console.error("Błąd wysyłki danych do utworzenia celu.", error);
        });
    }
  }

  createSubTask = (e, parentId) => {
    if (e.key === 'Enter') {
      const userName = getUsername();


      let editedTask = {};

      const newTask = {
        name: this.state.textField,
        isCompleted: false,
      }

      let updatedState = this.state.tasks;
      updatedState.forEach(task => {
        if (task.taskid === parentId) {
          task.userSubtasks = [...task.userSubtasks, newTask];
          editedTask = task;
          console.log(editedTask);

          axios.post(`${API_DOMAIN}/UserTask`, editedTask,
            {
              'Content-Type': 'application/json'
            })
            .then((response) => {
              console.log("Wysłano dane do utworzenia głównego celu.", response);
              this.getMainTasks();
            })
            .catch((error) => {
              console.error("Błąd wysyłki danych do utworzenia celu.", error);
            });
        }
      });
    }
  }

  getMainTasks = () => {
    const userName = getUsername();
    const self = this;

    axios.get(`${API_DOMAIN}/UserTask`, {
      params: {
        userName: userName
      }
    })
      .then((response) => {
        console.log("Pobrano główne cele:", response);
        self.setState({
          tasks: response.data,
          readyForTask: true,
          textField: null
        });
      })
      .catch((error) => {
        console.error('Błąd pobierania listy zadań.', error);
      });
  }

  chooseMainTask = (number) => {
    console.log("kliknięto główny task");
    this.setState({ visibleTask: number })
  }

  componentDidMount() {
    this.getMainTasks();
  }

  render() {
    return (
      <div className="u-flex-8/12 o-flex u-padding-horizontal-big">

        <MainTasks
          tasks={this.state.tasks}
          readyForTask={this.state.readyForTask}
          updateValue={this.updateValue}
          createTask={this.createTask}
          chooseMainTask={this.chooseMainTask}
        />

        {this.state.tasks && this.state.tasks.map((parentTask) => {
          return <SubTasks
            key={parentTask.taskid}
            parentId={parentTask.taskid}
            parentName={parentTask.name}
            userSubtasks={parentTask.userSubtasks}
            readyForTask={this.state.readyForTask.toString()}
            isVisible={this.state.visibleTask === parentTask.taskid}
            updateValue={this.updateValue}
            createTask={this.createSubTask}
          />
        })}

      </div>
    )
  }
}

export default TaskBoard

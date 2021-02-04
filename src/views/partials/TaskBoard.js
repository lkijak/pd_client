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

  createTask = (taskName) => {
      const userName = getUsername();

      axios.post(`${API_DOMAIN}/UserTask`, {
        name: taskName,
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

  createSubTask = (parentId, subtaskName) => {
      let updatedState = this.state.tasks;
      const newTask = {
        name: subtaskName,
        isCompleted: false,
      }
      
      let editedTask = updatedState.find(mainTask => mainTask.taskid === parentId);
      editedTask.userSubtasks = [...editedTask.userSubtasks, newTask];

      this.setState({tasks: updatedState});
      this.updateWholeTask(editedTask);
  }

  archiveTask = (id) => {
    let updatedState = this.state.tasks;
    
    let editedTask = updatedState.find(mainTask => mainTask.taskid === id);
    editedTask.isArchiwed = true;
    console.log("Archiwizacja celu:", editedTask);
    
    this.setState({tasks: updatedState});
    this.archiveWholeTask(id);
  }

  doneTask = (id) => {
    let updatedState = this.state.tasks;
    
    let editedTask = updatedState.find(mainTask => mainTask.taskid === id);
    editedTask.isCompleted = !editedTask.isCompleted;
    
    this.setState({tasks: updatedState});
    this.updateWholeTask(editedTask);
  }

  archiveSubTask = (parentId, subtaskName) => {
    let updatedState = this.state.tasks;
    
    let editedTask = updatedState.find(mainTask => mainTask.taskid === parentId);
    let subTask = editedTask.userSubtasks.find(subTask => subTask.name === subtaskName);
    let index = editedTask.userSubtasks.indexOf(subTask);
    if(index !== -1) {
      editedTask.userSubtasks.splice(index, 1);
    }
    
    this.setState({tasks: updatedState});
    this.updateWholeTask(editedTask);
  }

  doneSubTask = (parentId, subtaskName) => {
    let updatedState = this.state.tasks;
    
    let editedTask = updatedState.find(mainTask => mainTask.taskid === parentId);
    let subTask = editedTask.userSubtasks.find(subTask => subTask.name === subtaskName);
    subTask.isCompleted = !subTask.isCompleted;
    
    this.setState({tasks: updatedState});
    this.updateWholeTask(editedTask);
  }

  updateWholeTask = (editedTask) => {
    axios.patch(`${API_DOMAIN}/UserTask`, editedTask, {
      'Content-Type': 'application/json'
    })
    .then((response) => {
      console.log("Wysłano dane zaktualizowanego zadania i jego podrzędnych zadań.", response);
      this.getMainTasks();
    })
    .catch((error) => {
      console.error("Błąd wysyłki danych zaktualizowanego zadania i jego podrzędnych zadań.", error);
    });
  }

  archiveWholeTask = (id) => {
    axios.delete(`${API_DOMAIN}/UserTask/Archiwe`, {
      params: {
        taskId: id
      }
    }, 
    {
      'Content-Type': 'application/json'
    })
    .then((response) => {
      console.log("Wysłano prośbę o usunięcie całego zadania (celu).", response);
      this.getMainTasks();
    })
    .catch((error) => {
      console.error("Błąd wysyłki żądania usunięcia całego zadania (celu).", error);
    });
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
        console.error('Błąd pobierania listy zadań. Może być to spowodowane brakiem zadań w systemie.', error);
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
      <div className="u-flex-8/12 o-flex u-padding-horizontal-big c-taskboard">

        <MainTasks
          tasks={this.state.tasks}
          readyForTask={this.state.readyForTask}
          updateValue={this.updateValue}
          createTask={this.createTask}
          chooseMainTask={this.chooseMainTask}
          doneTask={this.doneTask}
          archiveTask={this.archiveTask}
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
            createSubTask={this.createSubTask}
            doneSubTask={this.doneSubTask}
            archiveSubTask={this.archiveSubTask}
          />
        })}

      </div>
    )
  }
}

export default TaskBoard

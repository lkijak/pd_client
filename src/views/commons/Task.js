import React, { Component } from 'react'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

export class Task extends Component {

    state = {
        isArchived: null
    }

    checkBoxOnClick = () => {
        if(this.props.isMainTask){
            this.props.doneTask(this.props.id);
        } else {
            this.props.doneSubTask(this.props.parentId, this.props.title);
        }
    }

    archiveOnClick = () => {
        this.setState({isArchived: true});
        if(this.props.isMainTask){
            this.props.archiveTask(this.props.id);
        } else {
            this.props.archiveSubTask(this.props.parentId, this.props.title);
        }
    }

    chooseTask = () => {
        if (this.props.isMainTask) {
            this.props.chooseMainTask(this.props.id);
        }
    }

    render() {
        return (
            <li 
                className={"c-list__item" + (this.props.completed ? " done" : "") + (this.state.isArchived ? " u-hidden" : "")}
                key={this.props.id} 
                id={this.props.id} 
                completed={this.props.completed.toString()}
                onClick={this.chooseTask}
            >
                    <div className="task-title">
                        {this.props.title}
                    </div>
                    <div className="task-icons">
                        <DeleteOutlineIcon 
                            onClick={this.archiveOnClick}
                        />
                        <CheckCircleOutlineIcon 
                            onClick={this.checkBoxOnClick}
                        />
                    </div>
            </li>
        )
    }
}

export default Task

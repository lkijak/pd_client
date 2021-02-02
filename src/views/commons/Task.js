import React, { Component } from 'react'

export class Task extends Component {

    stage = {
        task: this.props.task
    }

    render() {
        return (
            <li 
                className="c-list__item" 
                key={this.props.id} 
                id={this.props.id} 
                completed={this.props.completed.toString()}
                onClick={() => {this.props.isMainTask && this.props.chooseMainTask(this.props.id)}}
            >
                    {this.props.title}
            </li>
        )
    }
}

export default Task

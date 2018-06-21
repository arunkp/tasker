import React, { Component } from 'react';

import Modal from './modal';

import Task from './taskItem';

class Tasks extends Component {

  constructor (props){
    super(props);
    this.state = {
      showModal: false,
      tasks: []
    };
  }

  editTask = () => {
    console.log(this);
    this.setState({
      "showModal": true
    })
  }
  
  doFetchTasks = async () => {
    const response = await fetch('/tasks', {
            method: 'GET',
            headers: {
            "Accept": "application/json",
            'Content-Type': 'application/json'
            }
        });
    const responseData = await response.json();
    if (response.status !== 200) throw Error("Hey not loading");
    return responseData;
  }

  getTasks = () => {
    this.doFetchTasks().then(data => {
        this.setState({
          "tasks": data
        })
      })
    .catch(err => console.log(err));
  }
  
  renderTasks = () => {
    return this.state.tasks.map((task,key) => {
        return (<div key={key}>
          <Task title={task.title} />
          <button onClick={this.editTask}>Edit</button>
        </div>)
    })
  }

  getData = (val) => {
    if(val) {
      return this.setState({
        "showModal":false
      })
    }
  }

  componentDidMount() {
    this.getTasks();
  }
	
	render() {
		return (
        <div className="task-container">
          <ul className="tasks">
            {this.renderTasks()}
          </ul>
          <Modal sendData={this.getData} open={this.state.showModal} />
        </div>
      )
	}

}

export default Tasks;
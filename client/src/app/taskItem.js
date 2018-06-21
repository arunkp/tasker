import React, { Component } from 'react';

class Task extends Component {
	state = {
		showModal: false, 
		key: "",
		id: "",
		title: ""
	}

	editTask = () => {
		console.log(this);
		// this.setState = {
		// 	"showModal": true
		// }
	}

	render() {
		return (
			<li className="task">
				<div>{this.props.title}</div>
			</li>
		)
	}
}

export default Task;
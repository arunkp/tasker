import React, { Component } from 'react';


class Modal extends Component {

	constructor (props){
    super(props);
    this.state = {
			open: false,
			title: "",
			description: ""
		}
  }

	SaveTask = () => {
		alert("saved");
		this.props.sendData(false);
	}

	render () {
		return (
			<div className={this.props.open ? 'modal show': 'modal hidden'}>
				<div>
					<label htmlFor='title'>Title</label>
					<input id='title' val={this.props.title} />
				</div>
				<div>
					<label htmlFor='desc'>Description</label>
					<textarea id='desc'>{this.props.description}</textarea>
				</div>
				<button onClick={this.SaveTask}>Save</button>	
			</div>
		)
	}
}


export default Modal;
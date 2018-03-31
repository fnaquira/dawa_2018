import React, { Component } from 'react';

import QuizApp from './QuizApp';
import Spinner from './Spinner';

class Validate extends Component{
	constructor(){
		super();
		this.state = {
			started: false,
			validating: false,
			user: ''
		};
	}
	userInputHandler (ev) {
		this.setState({user: ev.target.value})
	}
	componentDidUpdate(prevProps, prevState){
		if(this.state!==prevState){
			if(this.state.validating===false&&this.state.validating===false){
				if(this.state.user.length>14){
					if(this.state.user.indexOf('@tecsup.edu.pe')!==-1){
						this.setState({validating: true})
					}
				}
			}
		}
	}
	render() {
		if(this.state.started){
			return <QuizApp totalQuestions={10} />
		}else if(this.state.validating){
			return <Spinner />
		}else{
			return (<div>
				<h1>Bienvenido a tu primer examen</h1>
				<p>Antes de ingresar tu correo, lee las siguientes indicaciones:</p>
				<ul>
					<li>Va en serio</li>
					<li>Va en serio1</li>
					<li>Va en serio2</li>
				</ul>
				<input type="text" value={this.state.user} onChange={this.userInputHandler.bind(this)} />
			</div>);
		}
	}
}

export default Validate;

/*
fetch(data.url, {
	method: 'POST',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
	credentials: 'same-origin',
	body: JSON.stringify(data.params),
}).then((response) => {
	if(response.redirected) return window.location.href = 'login';
	else return response.json();
}).then((responseJson) => data.cb(responseJson) )
.catch((error) => {
	$.gritter.add({
		title: 'Error al comunicarse con el servidor',
		text: error,
		image: 'img/advertencia.png',
		sticky: false,
		time: 6000,
		class_name: 'my-sticky-class'
	});
});
*/
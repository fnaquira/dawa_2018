import React, { Component } from 'react';

import QuizApp from './QuizApp';
import Spinner from './Spinner';

import axios from '../axios_dawa';

class Validate extends Component{
	constructor(){
		super();
		this.state = {
			started: false,
			validating: false,
			email: '',
			_id: ''
		};
	}
	componentDidMount(){
		this.textInput.current.focus();
	}
	userInputHandler (ev) {
		this.setState({email: ev.target.value})
	}
	componentDidUpdate(prevProps, prevState){
		if(this.state!==prevState){
			if(this.state.validating===false&&this.state.started===false){
				if(this.state.email.length>14&&this.state.email!==prevState.email){
					if(this.state.email.indexOf('@tecsup.edu.pe')!==-1){
						this.validate();
						this.setState({validating: true});
					}
				}
			}
		}
	}
	validate(){
		axios.post( 'users/by_email', {email: this.state.email} )
            .then( response => {
            	if(response.data.error!=='Not found')
                	this.setState({started: true,_id: response.data._id});
               	else
               		this.setState( { started: false, validating: false } );
            } )
            .catch( error => {
                this.setState( { started: false, validating: false } );
            } );
	}
	render() {
		if(this.state.started){
			return <QuizApp totalQuestions={10} user={this.state._id} quiz={0} />
		}else if(this.state.validating){
			return <Spinner />
		}else{
			return (<div>
				<h1>Bienvenid@ a tu primer examen</h1>
				<p>Antes de ingresar tu correo, lee las siguientes indicaciones:</p>
				<ul>
					<li>Va en serio</li>
					<li>Va en serio1</li>
					<li>Va en serio2</li>
				</ul>
				<input type="text" ref={(current) =>{this.textInput={current}}} value={this.state.email} onChange={this.userInputHandler.bind(this)} />
			</div>);
		}
	}
}

export default Validate;
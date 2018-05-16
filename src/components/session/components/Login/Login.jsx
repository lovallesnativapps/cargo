import React, { Component } from 'react';
import logo from '../../../../design/images/logoblanco.png';
import './Login.css';
import {connect} from 'react-redux';


var goIn = (e) => {
  	// e.preventDefault();
	// history.push('/goin');
	console.log('hi');
}

class Login extends Component {

	constructor(props){
		super(props);
		this.state={
			username:'',
			password:''
		}
	}
	render() {
		return(
			<div className="App-login">
				<div className="App-login-buttons">
					<img src={logo} className="App-logo" alt="logo" />
					<div className="App-login-buttons">
						<label>Usuario</label>
						<input type="text" name="username"/>
						<label>Password</label>
						<input type="text" name="password" value={this.props.ctr}/>
						<button onClick={() => goIn()} className="App-login-button">INICIAR SESION</button>
						<label clicked={() => this.props.login(this.state.username, this.state.password) } className="App-login-button">Registrate Aquí</label>
					</div>
				</div>
			</div>
		)	
	}
}
const mapStateToProps = state =>{
	return {
		ctr:state.counter
	};
};
const mapDispatchToProps = dispatch => {
	return {
		login: (username, password) => (dispatch) => {
			dispatch({type: 'AUTH_LOGIN', payload: {username, password}});
		}
	};
};
export default connect(mapStateToProps,mapDispatchToProps)(Login);
import React from 'react';
import './Signin.css';

const Signin = () =>{
	return (
		<div className="App-wrapp" >
			<h3>Nuevo Usuario</h3>
			<div className="App-signin-form">
				<div className="App-field">
					<input
						placeholder='Nombre'
						type='text'
						name='name'
					/>
				</div>
				<div className="App-field">
					<input
						placeholder='Apellido'
						type='text'
						name='Apellido'
					/>
				</div>
				<div className="App-field">
					<input
						placeholder='Email'
						type='text'
						name='Email'
					/>
				</div>
				<div className="App-field">
					<input
						placeholder='Usuario'
						type='text'
						name='Usuario'
					/>
				</div>
				<div className="App-field">
					<input
						placeholder='Contraseña'
						type='text'
						name='Contraseña'
					/>
				</div>
				<div className="App-field">
					<button className="App-login-signIn">INSCRÍBETE</button>		
				</div>
			</div>
		</div> 
	)
}
export default Signin;
import React from 'react';
import logo from '../../../../design/images/logoblanco.png';
import '../../dashboard.css';

export default class Header extends Component {

	render(){
		return (
			<div className="header">
      	<img src={logo} className="App-logo" alt="logo" />
    	</div> 
		)
	}
}
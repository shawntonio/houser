import React, {Component} from 'react';
import './Header.css'

export default class Header extends Component {

	render(){
		return(
			<div className="header">
				<img className="logo" src="https://raw.githubusercontent.com/shawntonio/simulation-2/master/assets/houser_logo.png" alt="logo"/>
				<h1>Houser</h1>
			</div>
		)
	}
}
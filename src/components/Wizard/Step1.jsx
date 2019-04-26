import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';


export default class Wizard extends Component {
	constructor(props) {
		super(props)

		this.state = {
			name: '',
			address: '',
			city: '',
			state: '',
			zipcode: 0
		}
		this.inputHandler = this.inputHandler.bind(this);
	}

	inputHandler(e) {
		const { value, name } = e.target
		this.setState({
			[name]: value
		})
	}

	render() {
		const { name, state, address, city, zipcode } = this.state

		return (
			<div>
				<section>
					<div>
						<h4>Property Name</h4>
						<input name='name' value={name} onChange={this.inputHandler} type="text" />
					</div>

					<div>
						<h4>Address</h4>
						<input name='address' value={address} onChange={this.inputHandler} type="text" />
					</div>

					<div>
						<div>
							<h4>City</h4>
							<input name='city' value={city} onChange={this.inputHandler} type="text" />
						</div>

						<div>
							<h4>State</h4>
							<input name='state' value={state} onChange={this.inputHandler} type="text" maxLength="2" />
						</div>

						<div>
							<h4>Zip</h4>
							<input name='zipcode' value={zipcode} onChange={this.inputHandler} type="number" />
						</div>
					</div>
				</section>

				<Link to='/wizard/step2'>
					<button>Next Step</button>
				</Link>
			</div>
		)
	}
}
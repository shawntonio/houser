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

	addListing = () => {
		Axios.post('/api/houses', ).then(() => {
			this.props.history.push('/')
		})
	}

	render() {
		const { name, state, address, city, zipcode } = this.state

		return (
			<div>
				<section>
					<div>
						<h4>Monthly Mortgage Amount</h4>
						<input name='name' value={name} onChange={this.inputHandler} type="text" />
					</div>

					<div>
						<h4>Desired Monthly Rent</h4>
						<input name='address' value={address} onChange={this.inputHandler} type="text" />
					</div>
				</section>

				<Link to='/wizard/step2'>
					<button>Previous Step</button>
				</Link>
				<button onClick={this.addListing}>Complete</button>
			</div>
		)
	}
}
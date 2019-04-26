import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';


export default class Wizard extends Component {
	constructor(props) {
		super(props)

		this.state = {
			img: ''
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
		const { img } = this.state

		return (
			<div>
				<section>
					<div>
						<h4>Image URL</h4>
						<input name='img' value={img} onChange={this.inputHandler} type="text" />
					</div>
				</section>

				<Link to='/wizard/step1'>
					<button>Previous Step</button>
				</Link>
				<Link to='/wizard/step3'>
					<button>Next Step</button>
				</Link>
			</div>
		)
	}
}
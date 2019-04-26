import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import store, {ADD_HOUSE_INFO} from '../../store';
import './Wizard.css';

export default class Wizard extends Component {
	constructor(props) {
		super(props)

		const reduxState = store.getState()

		this.state = {
			img: reduxState.img
		}
		this.inputHandler = this.inputHandler.bind(this);
	}

	componentDidMount(){
		store.subscribe(() => {
			const reduxState = store.getState()
			this.setState({
				img: reduxState.img
			})
		})
	}

	inputHandler(e) {
		const { value, name } = e.target
		this.setState({
			[name]: value
		})
	}

	updateRedux = () => {
		const {img} = this.state
		store.dispatch({
			type: ADD_HOUSE_INFO, payload: {
				img
			}})
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
					<button onClick={this.updateRedux}>Previous Step</button>
				</Link>
				<Link to='/wizard/step3'>
					<button onClick={this.updateRedux}>Next Step</button>
				</Link>
			</div>
		)
	}
}
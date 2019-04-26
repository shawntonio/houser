import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

import store, {ADD_HOUSE_INFO, CANCEL} from '../../store';

export default class Wizard extends Component {
	constructor(props) {
		super(props)

		const reduxState = store.getState()

		this.state = {
			mortgage: reduxState.mortgage,
			rent: reduxState.rent
		}
		this.inputHandler = this.inputHandler.bind(this);
	}

	componentDidMount(){
		store.subscribe(() => {
			const reduxState = store.getState()
			this.setState({
				mortgage: reduxState.mortgage,
				rent: reduxState.rent
			})
		})
	}

	inputHandler(e) {
		const { value, name } = e.target
		this.setState({
			[name]: value
		})
	}

	addListing = () => {
		const newListing = store.getState()
		Axios.post('/api/houses', {...newListing, ...this.state})
		.then(() => {
			store.dispatch({type: CANCEL})
			this.props.history.push('/')
		}).catch(err => console.log(err))
	}

	updateRedux = () => {
		const {mortgage, rent} = this.state
		store.dispatch({
			type: ADD_HOUSE_INFO, payload: {
				mortgage,
				rent
			}})
	}

	render() {
		const { mortgage, rent } = this.state

		return (
			<div>
				<section>
					<p>Recommended Rent: ${mortgage * 1.25}</p>
					<div>
						<h4>Monthly Mortgage Amount</h4>
						<input name='mortgage' value={mortgage} onChange={this.inputHandler} type="number" />
					</div>

					<div>
						<h4>Desired Monthly Rent</h4>
						<input name='rent'  onChange={this.inputHandler} value={rent} type="number" />
					</div>
				</section>

				<Link to='/wizard/step2'>
					<button onClick={this.updateRedux}>Previous Step</button>
				</Link>
				<button onClick={this.addListing}>Complete</button>
			</div>
		)
	}
}
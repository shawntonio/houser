import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';

import House from '../House/House';
import './Dashboard.css';

export default class Dashboard extends Component {
	constructor(props){
		super(props)

		this.state = {
			houses: []
		}
	}

	componentDidMount(){
		Axios.get('/api/houses').then(houses => {
			this.setState({houses: houses.data})
		}).catch(err => console.log(err))
	}

	delete = id => {
		Axios.delete(`/api/houses/${id}`)
		.then(() => this.componentDidMount())
	}

	render(){

		const house = this.state.houses.map(house => (
			<House key={house.id} house={house} delete={this.delete} />
		))

		return(
			<div className="outer-dash">
				<div className="dashboard">
					<header>
						<h1 className="dash-title">Dashboard</h1>
						<Link to='/wizard/step1'>
							<button className="new">Add New Property</button>
						</Link>
					</header>
					<p className="hl">Home Listings</p>
					{house}
				</div>
			</div>
		)
	}
}
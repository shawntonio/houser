import React, {Component} from 'react';
import House from '../House/House';
import {Link} from 'react-router-dom';
import Axios from 'axios';

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
			<div>
				<header>
					<h1>Dashboard</h1>
					<Link to='/wizard/step1'>
						<button>Add New Property</button>
					</Link>
				</header>

				{house}
			</div>
		)
	}
}
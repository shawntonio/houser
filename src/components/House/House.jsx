import React from 'react';
import './House.css'

function House(props){

	const {name, address, city, state, zip, id, img, mortgage, rent} = props.house

	return(
		<div className="house">
				<img className="house-pic" src={img} alt="house"/>

			<section className="home-info">
				<p>Property Name: {name}</p>
				<p>Address: {address}</p>
				<p>City: {city}</p>
				<p>State: {state}</p>
				<p>Zip: {zip}</p>
			</section>

			<section className="home-price">
				<p>Mortgage: {mortgage}</p>
				<p>Rent: {rent}</p>
			</section>

			
			<img className="x" onClick={() => props.delete(id)} src="https://raw.githubusercontent.com/shawntonio/simulation-2/master/assets/delete_button.png" alt="x"/>
		</div>
	)
	
}

export default House
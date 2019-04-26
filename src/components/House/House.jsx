import React from 'react';

function House(props){

	const {name, address, city, state, zip, id, img, mortgage, rent} = props.house

	return(
		<div>
			<p>
				<img src={img} alt="house"/>
				<span>Property Name: {name}</span>
				<span>Address: {address}</span>
				<span>City: {city}</span>
				<span>State: {state}</span>
				<span>Zip: {zip}</span>
				<span>Mortgage: {mortgage}</span>
				<span>Rent: {rent}</span>
			</p>

			<button onClick={() => props.delete(id)}>Delete</button>
		</div>
	)
	
}

export default House
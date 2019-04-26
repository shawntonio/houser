import React from 'react';

function House(props){

	const {name, address, city, state, zip, id} = props.house

	return(
		<div>
			<p>
				<span>Property Name: {name}</span>
				<span>Address: {address}</span>
				<span>City: {city}</span>
				<span>State: {state}</span>
				<span>Zip: {zip}</span>
			</p>

			<button onClick={() => props.delete(id)}>Delete</button>
		</div>
	)
	
}

export default House
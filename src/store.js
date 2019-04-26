import { createStore } from 'redux';

const initialState = {
	name: '',
	address: '',
	city: '',
	state: '',
	zipcode: 0,
	img: '',
	mortgage: 0,
	rent: 0
}

function reducer(state = initialState, action) {
	switch (action.type) {
		default:
			return state
	}
}

export default createStore(reducer)
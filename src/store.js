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

export const ADD_HOUSE_INFO = 'ADD_HOUSE_INFO'
export const CANCEL ="CANCEL"

function reducer(state = initialState, action) {
	switch (action.type) {
		case ADD_HOUSE_INFO:
			return {...state, ...action.payload}
		case CANCEL:
			return {...initialState}
		default:
			return state
	}
}

export default createStore(reducer)
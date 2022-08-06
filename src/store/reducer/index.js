import { ACTION_UPDETE_TODOS } from "../actions/types";

const initialState = {
	todos: [
	{id: 'y8mt86d', task: 'Eat', status: false},
	{id: 'cs06t6t', task: 'Sleep', status: false},
	{id: '236qdzo', task: 'Sit', status: false},
	{id: '85r2vdz', task: 'Relax', status: false}
]};

export default function rootReducer(state = initialState, {type, payload}) {
	switch(type) {
		case ACTION_UPDETE_TODOS:
			return {...state, todos: payload};
		default: return state;
	}
}
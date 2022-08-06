import { ACTION_UPDETE_TODOS } from "./types";

export function updateTodos(payload) {
	return {
		type: ACTION_UPDETE_TODOS,
		payload
	}
}
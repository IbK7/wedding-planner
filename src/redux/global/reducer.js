import types from "../types"

const initial = {
	loading: false,
	success: null,
	warning: null,
	info: null,
	error: null,
}

export const global_reducer = (state = initial, { type, payload }) => {
	switch (type) {
		case types.GLOBAL:
			return payload
		case types.GLOBAL_RESET:
			return initial
		default:
			return state
	}
}
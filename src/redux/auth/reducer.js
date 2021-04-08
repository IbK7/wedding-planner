import types from "../types"

const initial = {}

export const auth_reducer = (state = initial, { type, payload }) => {
	switch (type) {
		case types.AUTH:
			return payload
		case types.AUTH_RESET:
			return initial
		default:
			return state
	}
}
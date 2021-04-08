import types from "../types"

const initial = []

export const business_reducer = (state = initial, { type, payload }) => {
	switch (type) {
		case types.BUSINESS:
			return payload
		case types.BUSINESS_RESET:
			return initial
		default:
			return state
	}
}
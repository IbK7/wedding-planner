import types from "../types"

const initial = []

export const invoice_reducer = (state = initial, { type, payload }) => {
	switch (type) {
		case types.INVOICE:
			return payload
		case types.INVOICE_RESET:
			return initial
		default:
			return state
	}
}
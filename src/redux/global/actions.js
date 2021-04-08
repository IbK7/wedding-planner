import types from "../types"
import { copy, status } from "../../utils"

const update_status = ({ success = null, error = null, warning = null, info = null } = {}) => (dispatch, getState) => {
	let state = copy(getState().global)
	dispatch({
		type: types.GLOBAL,
		payload: {
			...state,
			success, error, warning, info
		}
	})
}

const clear_status = () => (dispatch) => {
	status = { success: null, error: null, warning: null, info: null }
	dispatch({
		type: types.GLOBAL_RESET
	})
}

const loading = val => (dispatch, getState) => {
	let state = copy(getState().global)
	console.log(state)
	state.loading = val
	dispatch({
		type: types.GLOBAL,
		payload: state
	})
}


export default { update_status, loading, clear_status }
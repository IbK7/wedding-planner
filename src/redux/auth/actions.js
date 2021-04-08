import types from "../types"
import { copy, status, url_encode } from "../../utils"
import backend from "../../axios"
import { global_actions } from "../"

const login = (user) => (dispatch, getState) => {
	let state = copy(getState().auth)
	dispatch(global_actions.loading(true))
	backend.post("/user/login", user)
		.then(({ data }) => {
			sessionStorage.setItem("token", data.token)
			if (user.remember) {
				localStorage.setItem("token", data.token)
			}
			state = data.data
			status.success = data.message
		})
		.catch(error => {
			status.error = error.response ? error.response.data.message : error.message
		})
		.finally(() => {
			dispatch({
				type: types.AUTH,
				payload: state
			})
			dispatch(global_actions.update_status(status))
			dispatch(global_actions.loading(false))

		})
}

const register_customer = user => (dispatch, getState) => {
	let state = copy(getState().auth)
	dispatch(global_actions.loading(true))
	backend.post("/user/create/customer", { ...user, role: "customer" })
		.then(({ data }) => {
			state = data.data
			status.success = data.message
			sessionStorage.setItem("token", data.token)
		})
		.catch(error => {
			status.error = error.response ? error.response.data.message : error.message
		})
		.finally(() => {
			dispatch({
				type: types.AUTH,
				payload: state
			})
			dispatch(global_actions.update_status(status))
			dispatch(global_actions.loading(false))

		})
}

const register_business = user => (dispatch, getState) => {
	let state = copy(getState().auth)
	dispatch(global_actions.loading(true))
	backend.post("/user/create/business", { ...user, role: "business" })
		.then(({ data }) => {
			sessionStorage.setItem("token", data.token)
			state = data.data
			status.success = data.message
		})
		.catch(error => {
			status.error = error.response ? error.response.data.message : error.message
		})
		.finally(() => {
			dispatch({
				type: types.AUTH,
				payload: state
			})
			dispatch(global_actions.update_status(status))
			dispatch(global_actions.loading(false))

		})
}
const login_by_token = () => (dispatch, getState) => {
	let state = copy(getState().auth)
	dispatch(global_actions.loading(true))
	backend.get(`/user/my`)
		.then(({ data }) => {
			state.user = data.data
			sessionStorage.setItem("token", data.token)
		})
		.catch(error => {
			status.error = error.response ? error.response.data.message : error.message
		})
		.finally(() => {
			dispatch({
				type: types.AUTH,
				payload: state
			})
			dispatch(global_actions.update_status(status))
			dispatch(global_actions.loading(false))
		})
}

const update_customer = customer => (dispatch, getState) => {
	let state = copy(getState().auth)
	if (state._id) {
		dispatch(global_actions.loading(true))
		backend.put(`/customer/${state._id}`, customer, {
			params: {
				populate: url_encode(
					[
						{
							path: "user spouse"
						}
					]
				)
			}
		})
			.then(({ data }) => {
				state.user = data.data
			})
			.catch(error => {
				status.error = error.response ? error.response.data.message : error.message
			})
			.finally(() => {
				dispatch({
					type: types.AUTH,
					payload: state
				})
				dispatch(global_actions.update_status(status))
				dispatch(global_actions.loading(false))
			})
	} else {
		dispatch(global_actions.update_status({ warning: "Please Login First" }))
	}


}


export default { login, register_customer, register_business, login_by_token, update_customer }
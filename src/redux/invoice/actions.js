import types from "../types"
import { copy, status, url_encode } from "../../utils"
import backend from "../../axios"
import { global_actions } from "../"

const create_invoice = data => (dispatch, getState) => {
	let state = copy(getState().business)
	let user = copy(getState().auth)
	dispatch(global_actions.loading(true))
	backend.post("/invoice", {
		...data,
		[user && user.user.role === "customer" ? "customer" : "business"]: user && user._id ? user._id : undefined,
	}, {
		params: {
			populate: url_encode(
				[
					{
						path: "user reviews"
					}
				]
			)
		}
	})
		.then(({ data }) => {
			state = state.length > 0 ? state.concat([data.data]) : [data.data]
		})
		.catch(error => {
			status.error = error.response ? error.response.data.message : error.message
		})
		.finally(() => {
			dispatch({
				type: types.INVOICE,
				payload: state
			})
			dispatch(global_actions.update_status(status))
			dispatch(global_actions.loading(false))
		})
}

const fetch_invoice = query => (dispatch, getState) => {
	let state = copy(getState().business)
	let user = copy(getState().auth)
	dispatch(global_actions.loading(true))
	backend.get("/invoice", {
		params: {
			...query,
			[user && user.user.role === "customer" ? "customer" : "business"]: user && user._id ? user._id : undefined,
			populate: url_encode(
				[
					{
						path: "user reviews"
					}
				]
			)
		}
	})
		.then(({ data }) => {
			state = data.data
		})
		.catch(error => {
			status.error = error.response ? error.response.data.message : error.message
		})
		.finally(() => {
			dispatch({
				type: types.INVOICE,
				payload: state
			})
			dispatch(global_actions.update_status(status))
			dispatch(global_actions.loading(false))
		})
}

export default {
	fetch_invoice, create_invoice
}
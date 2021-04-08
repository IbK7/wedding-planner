import types from "../types"
import { copy, status, url_encode } from "../../utils"
import backend from "../../axios"
import { global_actions } from "../"

const fetch_business = query => (dispatch, getState) => {
	let state = copy(getState().business)
	dispatch(global_actions.loading(true))
	backend.get("/business", {
		params: {
			...query, populate: url_encode(
				[
					{
						path: "user"
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
				type: types.BUSINESS,
				payload: state
			})
			dispatch(global_actions.update_status(status))
			dispatch(global_actions.loading(false))
		})
}

export default {
	fetch_business
}
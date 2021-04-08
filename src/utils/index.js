import { useEffect, useRef } from "react"
export const copy = x => JSON.parse(JSON.stringify(x))
export const loading = val => { window.loading = val }
export const status = { success: null, error: null, warning: null, info: null }
export const url_encode = x => encodeURI(JSON.stringify(x))
export const usePrevious = (value) => {
	const ref = useRef();
	useEffect(() => {
		ref.current = value;
	});
	return ref.current;
}

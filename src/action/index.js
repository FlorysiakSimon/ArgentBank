import db from '../services/db'

export const LOGIN = "LOGIN"
export const LOGIN_SUCCESS = "LOGIN_SUCESS"
export const LOGOUT_REQUEST = "LOGOUT_REQUEST"
export const LOGIN_ERROR = "LOGIN_ERROR"

/** call api for login request
 * @param {string} email
 * @param {string} password
 */
 export const loginRequest = (email, password) => {
	return async (dispatch) => {
		dispatch({ type: LOGIN });
		try {
			const res = await db.post('/login', { email, password });
			const token = res.data.body.token
			dispatch({type: LOGIN_SUCCESS, payload:{ email, password, token }})
			console.log(token)
		} catch (error) {
			dispatch({type:LOGIN_ERROR})
			//console.log(error);
		}
	};
};

/** logout
 */
export const logOut = () => ({
	type: LOGOUT_REQUEST,
});


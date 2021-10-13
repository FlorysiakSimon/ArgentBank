import db from '../services/db'

export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_SUCCESS = "LOGIN_SUCESS"
export const LOGOUT_REQUEST = "LOGOUT_REQUEST"
/**
 * @param {string} email
 * @param {string} password
 */
 export const loginRequest = (email, password) => {
	return async (dispatch) => {
		dispatch({ type: LOGIN_REQUEST });
		try {
			const res = await db.post('/login', { email, password });
            dispatch(loginSuccess(email, password, res.data));
			console.log(res)
		} catch (error) {
			console.log(error);
		}
	};
};

/**
 * @param {string} email
 * @param {string} password
 */
 export const loginSuccess = (email, password) => {
	return {
		type: LOGIN_SUCCESS,
		payload: {
			email,
			password,
		},
	};
};

export const logOut = () => ({
	type: LOGOUT_REQUEST,
});
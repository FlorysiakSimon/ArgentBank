import db from '../services/db'

export const LOGIN = "LOGIN"
export const LOGIN_SUCCESS = "LOGIN_SUCESS"
export const LOGOUT_REQUEST = "LOGOUT_REQUEST"
export const LOGIN_ERROR = "LOGIN_ERROR"
export const USER_INFO = "USER_INFO"
var token = ''

/** call api for login request
 * @param {string} email
 * @param {string} password
 */
 export const loginRequest = (email, password) => {
	return async (dispatch) => {
		dispatch({ type: LOGIN });
		try {
			const res = await db.post('user/login',{ email, password });
			token = res.data.body.token
			dispatch({type: LOGIN_SUCCESS, payload:{ email, password, token }})
		} catch (error) {
			dispatch({type:LOGIN_ERROR})
		}
	};
};

/** logout
 */
export const logOut = () => ({
	type: LOGOUT_REQUEST,
});

/** call api for user infos
 */
export const userInfo = () => {
	return async (dispatch) => {
		try {
			const res = await db.post('user/profile',{},{ headers:{ Authorization: `Bearer`+ token }});
			dispatch({type: USER_INFO, payload:{ firstName:res.data.body.firstName, lastName:res.data.body.lastName }})
		} catch (error) {
			console.log(error)
		}
	};
};
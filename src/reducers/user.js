import {  LOGOUT_REQUEST, LOGIN_SUCCESS,LOGIN_ERROR, USER_INFO} from "../action";


export const initialState = {
	logged: false,
	email: "",
	password: "",
	id: "",
	firstName: "",
	lastName: "",
	token:"",
	error:false
};

const user = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				...state,
				logged: true,
				error: false,
				email:action.payload.email,
				password:action.payload.password,
				token:action.payload.token
			}
		case LOGOUT_REQUEST:
			return {
				initialState
			};
		case LOGIN_ERROR:
			return{
				...state,
				error: true,
			}
		case USER_INFO:
			return{
				...state,
				firstName:action.payload.firstName,
				lastName:action.payload.lastName,
			}
		default:
			return state;
	}
};

export default user;
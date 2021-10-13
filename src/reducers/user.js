import { LOGIN_REQUEST, LOGOUT_REQUEST, LOGIN_SUCCESS} from "../action";


export const initialState = {
	logged: false,
	email: "",
	password: "",
	id: "",
	firstName: "",
	lastName: "",
};

const user = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_REQUEST:
			return {
				...state,
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				logged: true,
				email:action.payload.email,
				password:action.payload.password
			}
		case LOGOUT_REQUEST:
			return {
				initialState
			};
		default:
			return state;
	}
};

export default user;
import { LOGIN_REQUEST } from "../action";


export const initialState = {
	logged: false,
	email: "",
	password: "",
	id: "",
	firstName: "",
	lastName: "",
	token: "",
};

const user = (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_REQUEST:
			return {
				...state,
				logged: true,
			};

		default:
			return state;
	}
};

export default user;
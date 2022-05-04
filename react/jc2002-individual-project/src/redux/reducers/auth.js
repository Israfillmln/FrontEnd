import { auth_types } from "../types";


const init_state = {
    id: 0,
    username: "",
    email: "",
    fullname: "",
    errorMessage: ""
}

export const auth_reducers = (state = init_state, action) => {
    if (action.type === auth_types.LOGIN_USER) {
        return {
            ...state,
            id: action.payload.id,
            username: action.payload.username,
            email: action.payload.email,
            fullname: action.payload.fullname,
        }
    } else if (action.type === auth_types.LOGOUT_USER) {
        return init_state
    } else if (action.type === auth_types.AUTH_ERROR) {
        return {
            ...state,
            errorMessage: action.payload
        }
    }

    
    return state
};
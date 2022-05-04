import { network_types } from "../types"

const init_state = {
    messageErr: ""
}

export const network_reducer = (state = init_state, action) => {
    if (action.type === network_types.NETWORK_ERROR) {
        return {
            ...state,
            messageErr: action.payload
        }
    } else if (action.type === network_types.NETWORK_RESET) {
        return init_state
    }
    return state
}
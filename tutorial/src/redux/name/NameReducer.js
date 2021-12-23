const initialState = {
    loading: false,
    name: [],
    error: ""
}

const nameReducer = (state=initialState, action) => {
    switch(action.type) {
        case "FETCH_NAME_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "FETCH_NAME_SUCCESS":
            return {
                ...state,
                loading: false,
                name: action.payload
            }
        case "FETCH_NAME_ERROR":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default nameReducer;
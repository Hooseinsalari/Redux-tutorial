import axios from "axios"

const fetchNameRequest = () => {
    return {
        type: "FETCH_NAME_REQUEST"
    }
}

const fetchNameSuccess = (name) => {
    return {
        type: "FETCH_NAME_SUCCESS",
        payload: name
    }
}

const fetchNameError = (error) => {
    return {
        type: "FETCH_NAME_ERROR",
        payload: error
    }
}

export const fetchName = () => {
    return (dispatch) => {
        dispatch(fetchNameRequest())
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                const data = response.data
                dispatch(fetchNameSuccess(data))
            })
            .catch((error) => {
                const errorMsg = error.message
                dispatch(fetchNameError(errorMsg))
            })
    }
}
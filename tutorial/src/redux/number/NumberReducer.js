const initialState = {
    number: 10
}

const numberReducer = (state=initialState, action) => {
    switch(action.type) {
        case "INCREASE2": 
            return {
                number: state.number + 1
            }
        case "DECREASE2":
            return {
                number: state.number - 1
            }
        default:
            return state
    }
}

export default numberReducer;
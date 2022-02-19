export const increase = (value) => {
    return {type: "INCREASE", payload: value}
}

export const decrease = (value) => {
    return {type: "DECREASE", payload: value}
}
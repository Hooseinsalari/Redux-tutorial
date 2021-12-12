const increaseCounter = () => {
    return {type: "INCREASE_COUNTER"}
}

const decreaseCounter = () => {
    return {type: "DECREASE_COUNTER"}
}

export {increaseCounter, decreaseCounter}
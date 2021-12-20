const initialState = {
  cake: 0,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_CAKE":
      return {
        cake: state.cake + 1,
      };
    case "DECREASE_CAKE":
      return {
        cake: state.cake - 1,
      };
    default :
      return state
  }
};

export default cakeReducer;

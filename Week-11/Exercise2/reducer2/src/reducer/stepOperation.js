const initialState = 0;

const changeSteps = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};

export default changeSteps;

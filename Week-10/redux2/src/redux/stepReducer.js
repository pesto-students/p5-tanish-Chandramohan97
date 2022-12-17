const initialState = 0;

const stepReducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "reset":
      return (state = 0);
    default:
      return state;
  }
};

export default stepReducer;

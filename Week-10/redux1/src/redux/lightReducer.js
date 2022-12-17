const initialState = true;

const lightReducer = (state = initialState, action) => {
  switch (action.type) {
    case "On":
      return (state = true);
    case "Off":
      return (state = false);
    default:
      return state;
  }
};

export default lightReducer;

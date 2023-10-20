const reducer = (state, action) => {
  switch (action.type) {
    case "compDetails":
      return {
        ...state,
        compDetails: action.compDetails,
      };

    default:
      return state;
  }
};

export default reducer;

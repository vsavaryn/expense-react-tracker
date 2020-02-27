export default (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        transactions: [{ ...action.payload }, ...state.transactions]
      };
    case "DELETE":
      return {
        ...state,
        transactions: state.transactions.filter(
          ({ id }) => id !== action.payload
        )
      };
    default: {
      return state;
    }
  }
};

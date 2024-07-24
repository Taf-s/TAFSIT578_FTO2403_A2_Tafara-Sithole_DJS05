import { add, subtract, reset } from "./actions";

// Reducer
const reducer = (state = 0, action) => {
  switch (action.type) {
    case add.type:
      return { count: state.count + 1 };
    case subtract.type:
      return { count: state.count - 1 };
    case reset.type:
      return { count: 0 };
    default:
      return state;
  }
};

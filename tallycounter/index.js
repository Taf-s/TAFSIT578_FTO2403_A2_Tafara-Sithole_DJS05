const createStore = require("./store");
const reducer = require("./reducer");
const { add, subtract, reset } = require("./actions");

// Initialize the store
const store = createStore(reducer);

// Subscribe to state changes
store.subscribe(() => {
  console.log("State changed:", store.getState());
});

// Dispatch actions
store.dispatch(add()); // State changed: { count: 1 }
store.dispatch(add()); // State changed: { count: 2 }
store.dispatch(subtract()); // State changed: { count: 1 }
store.dispatch(reset()); // State changed: { count: 0 }

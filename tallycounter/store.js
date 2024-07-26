// Create Store
const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;

  /**
   * Dispatches an action to the reducer, updating the state and notifying all listeners.
   *
   * @param {Object} action - The action to be dispatched.
   * @return {undefined} This function does not return a value.
   */
  const dispatch = (action) => {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  };

  /**
   * Adds a listener to the list of listeners and returns a function to unsubscribe the listener.
   *
   * @param {function} listener - The listener function to be added.
   * @return {function} A function that, when called, removes the listener from the list.
   */
  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  };

  // Initialize the state
  dispatch({});

  return { getState, dispatch, subscribe };
};

module.exports = createStore;

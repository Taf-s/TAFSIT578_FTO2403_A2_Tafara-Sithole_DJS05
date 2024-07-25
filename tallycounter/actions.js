// Action Creator for ADD action
const add = () => {
  return {
    type: "ADD",
  };
};

// Action Creator for SUBTRACT action
const subtract = () => {
  return {
    type: "SUBTRACT",
  };
};

// Action Creator for RESET action
const reset = () => {
  return {
    type: "RESET",
  };
};

module.exports = { add, subtract, reset };

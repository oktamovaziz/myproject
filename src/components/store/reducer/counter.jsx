const initalState = {
  count: localStorage.getItem('count') || 0,
};

function setCount(state = initalState, action) {
  if (action.type == "plus") {
    localStorage.setItem('count', state.count + 1)
    return {
      ...state,
      count: state.count + 1,
    };
  }
  if (action.type == "minus") {
    localStorage.setItem("count", state.count - 1);
    return {
      ...state,
      count: state.count - 1,
    };
  }
  return state
}

export {setCount}

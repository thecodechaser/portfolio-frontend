

// reducer
const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, countriesData: action.Countries, globalData: action.Global };
    default:
      return state;
  }
};

export default projectsReducer;
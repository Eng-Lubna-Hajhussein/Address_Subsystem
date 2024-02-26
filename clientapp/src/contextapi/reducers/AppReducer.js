export const AppReducer = (state, action) => {
  switch (action.type) {
    case "GET_INFO":
      return {...state, info:action.info}
    case "ADD_COUNTRY":
      return {...state, [action.ID]: {} };
    case "REMOVE_COUNTRY":
      delete state[action.ID];
      return {...state};
    case "ADD_CITY":
      return { ...state, [action.PID]: {...state[action.PID], [action.ID]: [] } };
    case "REMOVE_CITY":
      delete state[action.PID][action.ID];
      return {...state};
    case "ADD_TOWN":
      const add_town_state = JSON.parse(JSON.stringify(state));
      add_town_state[action.countryID][action.PID] = [
        ...state[action.countryID][action.PID],
        action.ID,
      ];
      return add_town_state;
    case "REMOVE_TOWN":
      const towns = state[action.countryID][action.PID].filter(
        (ID) => ID !== action.ID
      );
      state[action.countryID][action.PID] = towns;
      return { ...state };
    default:
      return state;
  }
};

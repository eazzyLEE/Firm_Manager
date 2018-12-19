import { EMPLOYEES_FETCH_SUCCESS } from "../actions/types";
import { Actions } from "react-native-router-flux";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

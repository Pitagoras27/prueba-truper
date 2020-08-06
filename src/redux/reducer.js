import { LOGIN } from "../constants";

const INITIAL_STATE = {};

const loginUser = (state = INITIAL_STATE, { type, payload }) => {
  if (LOGIN === type) {
    return {
      ...state,
      user: payload,
    };
  }

  return INITIAL_STATE;
};

export default loginUser;

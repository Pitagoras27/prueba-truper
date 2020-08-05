import { LOGIN } from "../constants";

const INITIAL_STATE = {
  user: "",
};

const loginUser = (state = INITIAL_STATE, { type, payload }) => {
  if (LOGIN === type) {
    return {
      ...state,
      user: payload.user,
    };
  }

  return INITIAL_STATE;
};

export default loginUser;

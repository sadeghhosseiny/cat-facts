import { ACTION_TYPES } from 'actionTypes/actionTypes';

const initialState = {
  requesting: false,
  success: false,
  error: false,
  data: null,
};

const catReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.CAT_FACTS.REQUESTING: {
      return {
        success: true,
        requesting: false,
        error: false,
        data: payload,
      };
    }
    case ACTION_TYPES.CAT_FACTS.REQUESTING: {
      return { success: false, requesting: true, error: false };
    }
    case ACTION_TYPES.CAT_FACTS.ERROR: {
      return { success: false, requesting: false, error: true };
    }
    default:
      return state;
  }
};

export default catReducer;

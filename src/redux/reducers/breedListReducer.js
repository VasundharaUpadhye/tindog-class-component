import {
  GET_BREED_LIST,
  GET_BREED_LIST_SUCCESS,
  GET_BREED_LIST_FAILURE,
} from "../actions/constants";

const initialState = {
  isLoading: false,
  breedData: {},
  error: null,
};

export function breedListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BREED_LIST: {
      return { ...state, isLoading: true };
    }
    case GET_BREED_LIST_SUCCESS: {
      return { ...state, breedData: action.payload, isLoading: false };
    }
    case GET_BREED_LIST_FAILURE: {
      return { ...state, error: action.payload, isLoading: false };
    }
    default:
      return state;
  }
}

import {
  GET_BY_BREED,
  GET_BY_BREED_FAILURE,
  GET_BY_BREED_SUCCESS,
} from "../actions/constants";

const initialState = {
  isLoading: false,
  dogName: {},
  error: null,
};

export function byBreedReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BY_BREED: {
      return { ...state, isLoading: true };
    }
    case GET_BY_BREED_SUCCESS: {
      return { ...state, dogName: action.payload, isLoading: false };
    }
    case GET_BY_BREED_FAILURE: {
      return { ...state, error: action.payload, isLoading: false };
    }
    default:
      return state;
  }
}

import {
  GET_RANDOM_DOG,
  GET_RANDOM_DOG_SUCCESS,
  GET_RANDOM_DOG_FAILURE,
} from "../actions/constants";

const initialState = {
  isLoading: false,
  dogsData: {},
  error: null,
};

export function randomDogReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RANDOM_DOG: {
      return { ...state, isLoading: true };
    }

    case GET_RANDOM_DOG_SUCCESS: {
      return { ...state, dogsData: action.payload, isLoading: false };
    }

    case GET_RANDOM_DOG_FAILURE: {
      return { ...state, error: action.payload, isLoading: false };
    }

    default:
      return state;
  }
}

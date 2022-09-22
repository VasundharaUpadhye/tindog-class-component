import {
  GET_RANDOM_DOG,
  GET_RANDOM_DOG_FAILURE,
  GET_RANDOM_DOG_SUCCESS,
} from "./constants";
import axios from "axios";

export const getRandomDog = () => {
  return {
    type: GET_RANDOM_DOG,
  };
};

export const getRandomDogSuccess = (data) => {
  return {
    type: GET_RANDOM_DOG_SUCCESS,
    payload: data,
  };
};

export const getRandomDogFailure = (error) => {
  return {
    type: GET_RANDOM_DOG_FAILURE,
    payload: error,
  };
};

export const fetchRandomDog = () => {
  return (dispatch) => {
    dispatch(getRandomDog());
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => dispatch(getRandomDogSuccess(res.data)))
      .catch((err) => dispatch(getRandomDogFailure(err)));
  };
};

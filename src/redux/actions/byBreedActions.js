import Axios from "axios";
import {
  GET_BY_BREED,
  GET_BY_BREED_FAILURE,
  GET_BY_BREED_SUCCESS,
} from "./constants";

export const getByBreed = () => {
  return {
    type: GET_BY_BREED,
  };
};

export const getByBreedSuccess = (data) => {
  return {
    type: GET_BY_BREED_SUCCESS,
    payload: data,
  };
};

export const getByBreedFailure = (error) => {
  return {
    type: GET_BY_BREED_FAILURE,
    payload: error,
  };
};

export const fetchByBreed = (breedName) => {
  return (dispatch) => {
    dispatch(getByBreed());
    Axios.get(`https://dog.ceo/api/breed/${breedName}/images/random`)
      .then((res) => dispatch(getByBreedSuccess(res.data)))
      .catch((err) => dispatch(getByBreedFailure(err)));
  };
};

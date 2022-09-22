import axios from "axios";
import {
  GET_BREED_LIST,
  GET_BREED_LIST_SUCCESS,
  GET_BREED_LIST_FAILURE,
} from "./constants";

export const getbreedList = () => {
  return {
    type: GET_BREED_LIST,
  };
};

export const getbreedListSuccess = (data) => {
  return {
    type: GET_BREED_LIST_SUCCESS,
    payload: data,
  };
};

export const getbreedListFailure = (error) => {
  return {
    type: GET_BREED_LIST_FAILURE,
    payload: error,
  };
};

export const fetchBreedList = () => {
  return (dispatch) => {
    dispatch(getbreedList());
    axios
      .get("https://dog.ceo/api/breed/hound/images")
      .then((res) => dispatch(getbreedListSuccess(res.data)))
      .catch((err) => dispatch(getbreedListFailure(err)));
  };
};

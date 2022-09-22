import { combineReducers } from "redux";
import { randomDogReducer } from "./randomDogReducer";
import { byBreedReducer } from "./byBreedReducer";
import { breedListReducer } from "./breedListReducer";

export const reducer = combineReducers({
  randomDog: randomDogReducer,
  byBreed: byBreedReducer,
  breedList: breedListReducer,
});

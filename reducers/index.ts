import { combineReducers } from "redux";
import characters, { initialState as charactersState } from "./characters";

export const initialState = {
  characters: charactersState,
};

export default combineReducers({
  characters,
});

import {
  GET_CHARACTERS_LIST_SUCCESS,
  GET_CHARACTERS_LIST_ERROR,
} from "../constants/actionTypes";

export const getCharactersList = (pageNumber = 1) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${pageNumber}`
    );
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const data = await response.json();

    dispatch(getCharactersListSuccess(data));
  } catch (error) {
    dispatch({
      type: GET_CHARACTERS_LIST_ERROR,
    });
  }
};

export const getCharactersListSuccess = (data) => ({
  type: GET_CHARACTERS_LIST_SUCCESS,
  data,
});

export default {
  getCharactersList,
  getCharactersListSuccess,
};

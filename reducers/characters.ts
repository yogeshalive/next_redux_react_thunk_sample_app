import { GET_CHARACTERS_LIST_SUCCESS } from "../constants/actionTypes";

export const initialState = {
  info: {},
  results: [],
};

export default (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case GET_CHARACTERS_LIST_SUCCESS: {
      // console.log(data);
      return {
        ...state,
        info: {
          ...state.info,
          ...data.info,
        },
        results: [...state.results, ...data.results],
      };
    }

    default: {
      return state;
    }
  }
};

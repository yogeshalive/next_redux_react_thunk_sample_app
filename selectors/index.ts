import { createSelector } from "reselect";

export const selectState = () => (state) => state.todo;

export const selectCharactersItem = () =>
  createSelector(selectState(), (characters) => characters.item);

export const selectCharactersData = () =>
  createSelector(selectState(), (characters) => characters.data);

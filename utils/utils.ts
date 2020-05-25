export const getFullYear = (created) =>
  new Date(new Date() - new Date(created)).getFullYear() - 1970;

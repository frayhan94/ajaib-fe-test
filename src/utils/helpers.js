/* eslint-disable import/prefer-default-export */

export const transformObjToQuery = (obj) => {
  let result = '?';
  for (const proper in obj) {
    if (result === '?') {
      result += `${proper}=${obj[proper]}`;
    } else {
      result += `&${proper}=${obj[proper]}`;
    }
  }
  return result;
};

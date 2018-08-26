export const changeCase = val => val.toUpperCase();

export const composeString = val => fn => fn(val);

export const composeStrings = (...fns) => f => {
  return fns.map(fn => fn(f)).join("");
};

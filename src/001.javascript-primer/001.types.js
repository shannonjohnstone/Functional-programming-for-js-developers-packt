export const isNull = value => !value && isObject(value);

export const isObject = x => typeof x === "object";

export const isFunction = x => typeof x === "function";

export const isArray = x => typeof x === "object" && Array.isArray(x);

export const isNumber = x => typeof x === "number";

export const isBoolean = x => typeof x === "boolean";

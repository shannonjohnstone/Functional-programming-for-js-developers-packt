import {
  isNull,
  isArray,
  isObject,
  isFunction,
  isNumber,
  isBoolean,
} from "./001.types";

it("null is object", () => {
  expect(isNull(null)).toBe(true);
});

describe("function", () => {
  const f = () => {};
  it("is a object", () => {
    expect(isFunction(f)).toBe(true);
  });
});

describe("array", () => {
  const initialArr = [1, 2, 3, 4];
  it("is a object", () => {
    expect(isObject(initialArr)).toBe(true);
  });
  it("is a array", () => {
    expect(isArray(initialArr)).toBe(true);
  });
});

describe("dynamic types", () => {
  it("values can change types", () => {
    let a = 1;
    expect(isNumber(a)).toBe(true);
    a = true;
    expect(isBoolean(a)).toBe(true);
  });
});

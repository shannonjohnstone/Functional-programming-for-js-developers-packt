import {
  changeCase,
  composeString,
  composeStrings,
} from "./001.function-declaration";

it("changeCase, composeString", () => {
  expect(composeString("fox")(changeCase)).toEqual("FOX");

  const names = composeStrings(composeString("fox"), composeString("ziggy"));
  const composedToUppercase = names(changeCase);
  expect(composedToUppercase).toBe("FOXZIGGY");
});

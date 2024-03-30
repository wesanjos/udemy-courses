import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

it("should transform number string to number", () => {
  const input = "1";

  const result = transformToNumber(input);

  // validando se o input foi convertido para número
  expect(result).toBe(1);
  
  // validando se o tipo do input foi convertido para Number
  // expect(result).toBeTypeOf(input);
});

it('should yield NaN if the number is invalid', () => {
  const param = 'test';

  const result = transformToNumber(param);

  expect(result).toBeNaN();
})

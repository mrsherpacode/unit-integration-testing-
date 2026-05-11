import { describe, it, expect } from "vitest";
import { cleanNumbers, transformToNumber } from "./numbers";

// shoult convert string to  a  number
(describe("transformToNumber"),
  () => {
    it("should transform a string number to a number of type number ", () => {
      const input = "1";
      const result = transformToNumber(input);
      expect(result).toBeTypeOf("number");
    });
    // should return NaN for non-transforable value

    it("should transform a string number to a number of type number ", () => {
      const input = "1";
      const result = transformToNumber(input);
      expect(result).toBe(1);
    });

    //should return NaN for non-transforable value and than can be many types
    it("should yield NaN for a non-transforable value", () => {
      const input = "invalid";
      const input2 = {};
      const result = transformToNumber(input);
      const result2 = transformToNumber(input2);

      expect(result).toBeNaN();
      expect(result2).toBeNaN();
    });
  });

// Integration testing, tests combination of units or functions
// here, cleanNumbers function calls multiple other functions, so this is good fit for integration test

describe("cleanNumbers", () => {
  it("should return an arry of numbers even if an array of string numbers are provided", () => {
    const numbers = ["1", "2"];
    const cleanValues = cleanNumbers(numbers);
    //expect(cleanValues[0]).toBeTypeOf("number"); // also right
    expect(cleanValues).toEqual([1, 2]); // here, we cann't use toBe()
  });

  it("should throw an error if an arry of at least one empty arry is provided", () => {
    const numbers = ["", 1];
    const numResult = () => cleanNumbers(numbers);
    expect(numResult).toThrow();
  });
});

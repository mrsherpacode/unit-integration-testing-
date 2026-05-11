import { describe, test, it, expect } from "vitest";
import { add } from "./math";
// writing first test
// describe is test suite
describe("Add", () => {
  it("should summarize all the values in an array ", () => {
    // AAA pattern
    // Arrange
    const numbers = [1, 2, 3];
    // Act
    const result = add(numbers);
    // Assert
    const expectedResult = numbers.reduce(
      (preValue, curValue) => preValue + curValue,
      0,
    );
    expect(result).toBe(expectedResult);
  });

  // when writing test we should try to test as much scenarios as possible to avoid possible bugs.
  // testing if invalid number is provided
  it("should return NaN if at least one invalid number is provided", () => {
    const inputs = ["invalid", 1];

    const result = add(inputs);

    expect(result).toBeNaN();
  });

  //  testing if the numeric string value is provided
  it("should return a correct sum if an array of numeric string values is provided", () => {
    const numbers = ["1", "2"];
    const result = add(numbers);
    const expectedResult = numbers.reduce(
      (preValue, curValue) => preValue + +curValue,
      0,
    );
    expect(result).toBe(expectedResult);
  });
  // checking if an array is empty.
  it("should yield 0 if the empty array is provided", () => {
    const numbers = [];
    const result = add(numbers);
    expect(result).toBe(0);
  });

  // checking if no value is provided and throw error if so

  it("should throw an error if no value is passed into the function", () => {
    const resultFn = () => {
      add();
    };
    expect(resultFn).toThrow("numbers is not iterable");
  });

  //checking if multiple arguements are provided instead of an array.
  it("should throw an error if multiple arguments are provided instead of an array", () => {
    const num1 = 1;
    const num2 = 2;
    const resultFn = () => {
      add(num1, num2);
    };
    // throw an error
    expect(resultFn).toThrow(TypeError);
  });
});

import { it, expect, describe } from "vitest";
import { validateStringNotEmpty, validateNumber } from "./validation";
///////////////////

describe("validateStringNotEmpty", () => {
  it("should throw an error if an empty string is provided ", () => {
    const input = "";
    const result = () => validateStringNotEmpty(input);
    expect(result).toThrow();
  });
});

describe("validateNumber", () => {
  it("should not throw an error if the valid input is provided", () => {
    const input = 1;
    const result = () => validateNumber(input);
    expect(result).not.toThrow();
  });

  /////
  it("should  throw an error if the invalid input is provided", () => {
    const input = "invalid";
    const result = () => validateNumber(input);
    expect(result).toThrow();
  });
});

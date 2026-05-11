import { describe, it, expect } from "vitest";
import { generateResultText } from "./new";

describe("generateResultText", () => {
  it("should return string whatever value is passed in ", () => {
    const value1 = 5;
    const value2 = "invalid";
    const value3 = false;
    const result1 = generateResultText(value1);
    const result2 = generateResultText(value2);
    const result3 = generateResultText(value3);
    expect(result1).toBeTypeOf("string");
    expect(result2).toBeTypeOf("string");
    expect(result3).toBeTypeOf("string");
  });
  it("should return a empty string if 'no-calc' is provided as a result", () => {
    const result = "no-calc";
    const resultText = generateResultText(result);
    expect(resultText).toBe("");
  });

  it("should return  'invalid' string if invalid is provided as a result", () => {
    const result = "invalid";
    const resultText = generateResultText(result);
    expect(resultText.toLowerCase()).toContain("invalid");
  });
});

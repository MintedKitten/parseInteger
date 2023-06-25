import { parseInteger } from "../build";

describe("Test Parse Integer", () => {
  test("Parse Integer Input Scenarios", () => {
    function test(s: string) {
      return parseInteger(s);
    }
    expect(() => test("")).toThrowError(
      new TypeError("Input is not an Integer")
    );
    expect(() => test("0.5")).toThrowError(
      new TypeError("Input is not an Integer")
    );
    expect(() => test("30000000000000000")).toThrowError(
      new RangeError("Input is more than Number.MAX_SAFE_INTEGER")
    );
    expect(() => test("-30000000000000000")).toThrowError(
      new RangeError("Input is less than Number.MIN_SAFE_INTEGER")
    );
    expect(test("12")).toBe(12);
  });
});

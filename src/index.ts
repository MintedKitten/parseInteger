/**
 * Parse input exclusively as Safe Integer
 * @param s {String} The input
 * @param radix {Number} The radix. (Optional) Default = 10;
 * @throws {RangeError} Input is more than Number.MAX_SAFE_INTEGER
 * @throws {RangeError} Input is less than Number.MIN_SAFE_INTEGER
 * @throws {TypeError} Input is not an Integer
 * @returns {Number} A Safe Integer
 */
function parseInteger(s: string, radix?: number): number {
  const rad = radix ?? 10;
  const nm = Number(s);
  const nm2 = parseInt(s, rad);
  if (nm > Number.MAX_SAFE_INTEGER) {
    throw new RangeError("Input is more than Number.MAX_SAFE_INTEGER");
  }
  if (nm < Number.MIN_SAFE_INTEGER) {
    throw new RangeError("Input is less than Number.MIN_SAFE_INTEGER");
  }
  if (nm !== nm2 || isNaN(nm)) {
    throw new TypeError("Input is not an Integer");
  }
  return nm;
}

export { parseInteger as parseInteger };

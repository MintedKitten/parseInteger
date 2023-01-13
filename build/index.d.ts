/**
 * Parse input exclusively as Safe Integer
 * @param s {String} The input
 * @param radix {Number} The radix. (Optional) Default = 10;
 * @throws {RangeError} Input is more than Number.MAX_SAFE_INTEGER
 * @throws {RangeError} Input is less than Number.MIN_SAFE_INTEGER
 * @throws {TypeError} Input is not an Integer
 * @returns {Number} A Safe Integer
 */
declare function parseInteger(s: string, radix?: number): number;
export { parseInteger as parseInteger };

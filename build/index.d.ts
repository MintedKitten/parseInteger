/**
 * Parse input exclusively as Safe Integer
 * @param s {string} The input
 * @throws {RangeError} Input is more than Number.MAX_SAFE_INTEGER
 * @throws {RangeError} Input is less than Number.MIN_SAFE_INTEGER
 * @throws {TypeError} Input is not an Integer
 * @returns {number} A Safe Integer
 */
declare function parseInteger(s: string): number;
export { parseInteger };

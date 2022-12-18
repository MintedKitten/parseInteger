/**
 * Parse input exclusively as Safe Integer
 * @param s {String} The input
 * @throws {RangeError} Input is more than Number.MAX_SAFE_INTEGER
 * @throws {TypeError} Input is not an Integer
 * @returns {Number} A Safe Integer
 */
declare function parseInteger(s: string): number;
export { parseInteger as parseInteger };

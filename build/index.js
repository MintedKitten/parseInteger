"use strict";
exports.__esModule = true;
exports.parseInteger = void 0;
/**
 * Parse input exclusively as Safe Integer
 * @param s {String} The input
 * @throws {RangeError} Input is more than Number.MAX_SAFE_INTEGER
 * @throws {TypeError} Input is not an Integer
 * @returns {Number} A Safe Integer
 */
function parseInteger(s) {
    var nm = Number(s);
    var nm2 = parseInt(s);
    if (nm > Number.MAX_SAFE_INTEGER) {
        throw new RangeError("Input is more than Number.MAX_SAFE_INTEGER");
    }
    if (nm !== nm2 || isNaN(nm)) {
        throw new TypeError("Input is not an Integer");
    }
    return nm;
}
exports.parseInteger = parseInteger;

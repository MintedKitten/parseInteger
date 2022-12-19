"use strict";
var E = Object.defineProperty;
var N = Object.getOwnPropertyDescriptor;
var o = Object.getOwnPropertyNames;
var s = Object.prototype.hasOwnProperty;
var u = (e, r) => {
    for (var n in r) E(e, n, { get: r[n], enumerable: !0 });
  },
  a = (e, r, n, I) => {
    if ((r && typeof r == "object") || typeof r == "function")
      for (let t of o(r))
        !s.call(e, t) &&
          t !== n &&
          E(e, t, {
            get: () => r[t],
            enumerable: !(I = N(r, t)) || I.enumerable,
          });
    return e;
  };
var i = (e) => a(E({}, "__esModule", { value: !0 }), e);
var p = {};
u(p, { parseInteger: () => m });
module.exports = i(p);
function m(e) {
  let r = Number(e),
    n = parseInt(e);
  if (r > Number.MAX_SAFE_INTEGER)
    throw new RangeError("Input is more than Number.MAX_SAFE_INTEGER");
  if (r < Number.MIN_SAFE_INTEGER)
    throw new RangeError("Input is less than Number.MIN_SAFE_INTEGER");
  if (r !== n || isNaN(r)) throw new TypeError("Input is not an Integer");
  return r;
}
0 && (module.exports = { parseInteger });

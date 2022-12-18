import { parseInteger } from "../src";

try {
  const temp = parseInteger("");
  console.log('Test "" : Failed');
} catch (e) {
  if (e instanceof TypeError)
    console.log('Test "" : Input is not an Integer: Passed');
}
try {
  const temp = parseInteger("0.5");
  console.log('Test "0.5" : Failed');
} catch (e) {
  if (e instanceof TypeError)
    console.log('Test "0.5" : Input is not an Integer: Passed');
}
try {
  const temp = parseInteger("30000000000000000");
  console.log('Test "30000000000000000" : Failed');
} catch (e) {
  if (e instanceof RangeError)
    console.log(
      'Test "30000000000000000" : Input is more than Number.MAX_SAFE_INTEGER: Passed'
    );
}
try {
  const temp = parseInteger("12");
  console.log(`Test \"12\" : ${temp} Passed`);
} catch (e) {
  console.log('Test "12" : Failed');
}

function test() {
  console.log("Hello Test");
}

export { test as test };

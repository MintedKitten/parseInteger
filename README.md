[![NPM version](https://img.shields.io/npm/v/parseinteger.svg)](https://www.npmjs.com/package/parseinteger)

# parseInteger

Parse Exclusively Safe Integer From String

## Example
```typescript
import { parseInteger } from "parseinteger";

const number = parseInteger("42");
console.log(`The answer is ${number}`); // The answer is 42

try {
  const number = parseInteger("17.5");
} catch (e) {
  if (e instanceof TypeError) {
    // Handle the TypeError
    console.log(e.message);
  } else if (e instanceof RangeError) {
    // Handle the RangeError
    console.log(e.message);
  }
}
```

## License

This plugin is issued under the [MIT license](./LICENSE).

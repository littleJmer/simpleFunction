# simpleFunction

simpleFunction parses a sentence and replaces each word with the following: first letter, number of distinct characters between first and last character, and last letter. 

For example, Smooth would become S3h.  Words are separated by spaces or non-alphabetic characters and these separators should be maintained in their original form and location

#### Constraints
1. A Word should have at least 2 characters, if a word has less than 2 characters simpleFunction will return false.
1. Sentence should be a string, if si not a string simpleFunction will return false.

## Usage

```javascript
const { simpleFunction } = require('./simpleFunction.js');

# returns 'S3h'
simpleFunction("Smooth");

# returns 'S2h??A4F'
simpleFunction("Smth??ABCDEF");

# returns 'A3a l2a l0a t2a'
simpleFunction("Anita lava la tina")
```

## Run example
executes simpleFunction example
```
npm run start
```

## Test Cases
executes simpleFunction test cases
```
npm run test
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
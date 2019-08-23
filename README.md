# Playing Card Deck Generator

## Install

To install, simply use the package manager of your choice from the root of your application

```shell
$ npm i playing-card-deck-generator
```

## Usage

Import the library into your project using either the Node module system:

```js
const DeckGenerator = require('playing-card-deck-generator')
```

or the native ESModule system:

```js
import DeckGenerator from 'playing-card-deck-generator'
```

## Resources

### `DeckGenerator`

This component will be used to generate a custom deck of playing cards

#### `generate(suits, values)`

This method will actually handle the generating of your custom deck. It accepts an argument for suits which needs to be an Array of Strings. It also accepts an argument for values which also needs to be an Array of Strings.

### `standardDeck`

This component returns a generated deck of standard playing cards in the form of an Array of Strings

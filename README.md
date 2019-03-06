# Mind Stack discord
Discord adapter for Mind Stack

## This is a work in progress

## Installation

NPM
```bash
    npm i --save mindstack-discord
```

Yarn
```bash
    yarn add mindstack-discord
```

## Usage
Node
```js
    const LowBot = require('mindstack');
    const discord = require('mindstack-discord');

    let botInstance = new LowBot()
      .useAdapter(discord);
```

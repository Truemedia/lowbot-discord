# Lowbot discord
Discord adapter for lowbot

## This is a work in progress

## Installation

NPM
```bash
    npm i --save lowbot-discord
```

Yarn
```bash
    yarn add lowbot-discord
```

## Usage
Node
```js
    const LowBot = require('lowbot');
    const discord = require('lowbot-discord');

    let botInstance = new LowBot()
      .useAdapter(discord);
```

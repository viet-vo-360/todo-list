# todo-list
This repository is used for Cypress Testing

# Install node module (Node version required: 8.0 or above)
```npm install```

# Start project
```npm run start```

# Install cypress
```npm install cypress --save-dev```

# Add cypress
Insert these lines to ```packages.json```:
```
"scripts": {
  "cypress:open": "cypress open",
  "cypress:run": "cypress run"
},
```

# Run cypress
```npm run cypress:open``` or ```npm run cypress:run```

# [Add Cypress Image Snapshot Plugin](https://github.com/palmerhq/cypress-image-snapshot)

### Installation

```bash
npm install --save-dev cypress-image-snapshot
```

### Add to project 

Go to `<rootDir>/cypress/plugins/index.js`
Add the following to the project.

```js
const {
  addMatchImageSnapshotPlugin,
} = require('cypress-image-snapshot/plugin');

module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config);
};
```

Go to `nd in <rootDir>/cypress/support/commands.js`
Add the following to the `command.js` file

```js
import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
addMatchImageSnapshotCommand();
```

Example: 
```js
describe('Login', () => {
  it('should be publicly accessible', () => {
    cy.visit('/');

    // snapshot name will be the test title
    cy.matchImageSnapshot();

    // match element snapshot
    cy.get('#btn-submit').matchImageSnapshot();
  });
});
```
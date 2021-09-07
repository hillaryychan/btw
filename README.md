# btw - by the way

A strange combination of a note taking app and a to-do list.

## Development

### Requirements

* [Node.js](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/)

### Setting up

1. Clone the repository
2. Install dependencies

    ``` sh
    yarn install
    ```

Useful commands:

* `yarn start` - for running app locally
* `yarn test` - for running tests (not that there are many...)
* `yarn lint` - for linting code

### Debugging

The VS Code `launch.json` already has configurations set up for debugging unit tests.

Use the config `Debug Jest Test`, you should be able to automatically launch and attach to a process running your tests.

Otherwise you can:

1. Run tests with debugger listener using `yarn test:debug`
1. Run the debug config `Attach to Jest Process` which will attach to the `yarn test:debug` process

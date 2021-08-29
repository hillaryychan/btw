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

Debugging unit tests in VS Code

1. Run tests with debugger listener using `yarn test:debug`
1. Run debugger in VS Code. `launch.json` should already be configured to attach to tests using the config below.

    ```json
    {
      "version": "0.2.0",
      "configurations": [
        {
          "name": "Debug Jest Tests",
          "type": "node",
          "request": "launch",
          "runtimeArgs": [
            "--inspect-brk",
            "${workspaceRoot}/node_modules/.bin/jest",
            "--runInBand"
          ],
          "console": "integratedTerminal",
          "internalConsoleOptions": "neverOpen",
          "port": 9229
        }
      ]
    }
    ```

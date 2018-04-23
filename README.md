# React Redux Boilerplate with Ducks

Boilerplate to start your next project with React.

Use as you wish, but still read the license from LICENSE.

## Requirements

- MacOS or Linux. Windows not tested, but if it doesn't work, just use a Unix virtual machine.
- The current version of Node.js (8.x). Might work on older ones, but no guarantees!
- The [Yarn package manager](https://yarnpkg.com).

## Development requirements

If you decide to use Atom, install at least the following packages:

- linter
- linter-eslint
- language-babel
- language-postcss
- prettier-atom

## Good to know

If you want to try production mode, an [example configuration file](docs/nginx.conf) for Nginx is included. Or you can just deploy everything to CloudFront very easily.

## Keywords and links

These are not all in use and can easily be changed to be something else.
Just buzzwords for students.

- React (uses)
- Server Side rendering
  - Zero-configuration idiot-proof support.
  - `src/index.js`
  - `src/server.js` (your own code goes here!)
- Routing
  - React Router (uses)
  - Redux First router (alternative)
- State management
  - Redux (uses)
  - MobX (alternative)
- Functional programming
  - Immutable.js (uses)
  - Lodash (alternative)
  - Ramda (alternative)
- Immutable data
  - Immutable.js (uses)
- Styling
  - PostCSS and CSS modules (uses)
  - Styled Components (uses)
- Component development with designer-friendly methods
  - Storybook (alternative)
- Babel
  - preset-env (uses)
- Webpack
- Flow & TypeScript (mentioned)
- REST
- GraphQL
- Linting
  - Prettier
  - eslint
- Testing
  - Jest

## Howto

The software is divided into two subfolders. `client` has the client side
code (main dish). `server` contains a simple Express app to act as
a backend for our training session.

Commands are always run in either of these folders. Not in the common
root folder.

### develop (client)

- `cd client`
- `yarn`
- `cp .env.example .env`
- `yarn run start`
  - open browser and go to http://localhost:8888

### develop (server)

- `cd server`
- `yarn`
- `cp .env.example .env`
- `yarn run start`

### build (client)

Builds to `dist/` (client code) and `dist-server` (server side rendering) folder.

- `yarn run build`

### serve (server side rendering)

- `cd client`
- `yarn run build`
- `node dist-server/index.js`

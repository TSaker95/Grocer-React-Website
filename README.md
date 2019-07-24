## Setup

### Prerequisites

- Node.js
- Yarn (or NPM)
- A mongo database

### Configuration

- Download or clone this repo to your local machine
- Run `yarn install`
- Create a file called .env in the root directory of the repo and populate like so:
- `MONGODB_URI="mongodb://something/something"` -- the connection string for your mongo database
- `JWT_SECRET="something"` -- the secret used to encrypt and decrypt JWT for auth purposes
- `API_ENDPOINT="localhost:4000/"` -- the url the backend will be live at

### Running the app

- `yarn dev` to run app in development mode with hot reloading for front and backend
- `yarn build` to build files as in production mode
- `yarn start` to run app as in production mode

In dev mode, the frontend will run on localhost:3000 and the backend on localhost:4000. In production, the backend will serve the prebuilt frontend to the browser, so go to localhost:4000 to see the results.

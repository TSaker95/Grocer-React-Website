## Use instructions

- Download or clone this repo to your local machine
- yarn install
- yarn dev (to run app in development mode)
- yarn build (to build files for production mode)
- yarn start (to run app in production mode)

In dev mode, the frontend will run on localhost:3000 and the backend on localhost:8642. In production, the backend will serve the frontend scripts directly, so go to localhost:8642 to see the results.

## Problem definition and solution

Hillsdon Grocer currently has a simple, static website. While this fulfills most of their needs, they would like something more dynamic allowing them to better publicise products on sale. Ideally, they would like to be able to fill out a title, description and sale price and have it automatically displayed on their website.

Our solution to this is to create a login portal which then leads them to a dashboard showing current specials as well as ways to create, edit and delete specials. Once saved the current specials will be rendered on their website.

The client side of the website will be built in React using create-react-app. The backend will use Node.JS, Express and data will be stored in a Mongo database.

## Users

- Store owners
- Website visitors/potential customers

## Dataflow diagram

## Project plan and effort estimation

Must have
Desirable
Optional

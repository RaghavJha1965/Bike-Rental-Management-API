# bike rental management api

## description

this project is a bike rental management api built using the [nest.js](https://nestjs.com) framework. the api allows users to perform crud operations on bikes, enabling management of bike details such as make, model, year, and type. it provides a foundation for managing a bike rental system, and it is structured with modular controllers, services, and entities to ensure scalability and efficiency.

## features

- crud operations:
  - get a list of all bikes.
  - add a new bike.
  - update existing bike details.
  - delete a bike by id.
  
- sqlite database integration: data persistence using sqlite.
  
- swagger api documentation: auto-generated api documentation available via swagger ui.

## project setup

to get started with this project, follow the steps below:

### install dependencies

```bash
npm install
```

### run the project

you can run the project in different modes:

```bash
# development mode
npm run start

# watch mode (auto-restarts the server on file changes)
npm run start:dev

# production mode
npm run start:prod
```

### accessing the api

- the api will be running at `http://localhost:3000`.
- swagger documentation is accessible at `http://localhost:3000/api`.

## running tests

you can run the tests using the following commands:

```bash
# unit tests
npm run test

# end-to-end (e2e) tests
npm run test:e2e

# test coverage
npm run test:cov
```

## technology stack

- nest.js: a progressive node.js framework for building efficient and scalable server-side applications.
- typeorm: object-relational mapper (orm) for managing data with sqlite.
- swagger: api documentation tool to interact with the api.

## how to use the api

here are the available api endpoints:

- get /bikes: retrieve a list of all bikes.
- post /bikes: add a new bike (requires `make`, `model`, `year`, and `type` fields).
- get /bikes/:id: retrieve a bike by its id.
- put /bikes/:id: update bike details by id.
- delete /bikes/:id: delete a bike by its id.

### example request

to add a new bike:

**post /bikes**

```json
{
  "make": "royal enfield",
  "model": "classic 350",
  "year": 2021,
  "type": "cruiser"
}
```

## learn more

for more information on the technologies used in this project, check out the following resources:
- [nest.js documentation](https://docs.nestjs.com)
- [typeorm documentation](https://typeorm.io/#/)
- [swagger documentation](https://swagger.io/)

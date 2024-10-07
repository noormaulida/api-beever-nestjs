# API Beever NestJS

This projects build using NestJS (with Typescript) and PostgreSQL.

<div align="center">
  <img src="https://skillicons.dev/icons?i=nestjs,typescript,postgres" />
</div>


## External Libraries (and the reasons why use these libraries):

- Sequelize ORM
    - Required ORM Module
- Axios
    - Used for calling external API
- Bcrypt
    - Used for hashing password 
- JWT, Passport JWT
    - Used to generate and validate JWT Token in authentication process
- class-validator
    - Used for validation in DTO
- class-transformer
    - Used for exclude hidden field when serialize JSON response (at this case, `password` field)

## Documentation

- [Postman API Documentation](https://www.postman.com/payload-meteorologist-85676392/workspace/api-beever-nestjs)
- API Routes:
  - POST /api/v1/auth/register
  - POST /api/v1/auth/login
  - GET /api/v1/quotes (protected routes, need authentication)

Notes: Detail of example APIs responses and requests available at the Postman API Documentation Link [above](https://www.postman.com/payload-meteorologist-85676392/workspace/api-beever-nestjs).

## Code Structure

- `src`
  - `auth` (controller, service, module)
    - This folder handle authentication logic
    - Function `validateUser`, `generateToken`, `hashPassword` and `comparePassword` took a main part of the JWT Token Implementation as an auth method.
  - `lib` (guards, filters, configuration database)
    - Guards used as a middleware for protected routes
    - Filters used for validating the "not-common" case for validation rules for unique fields that not handled well by class-validator
  - `quotes` (controller, service, module, dto)
    - This folder handle quotes and integration with Kanye API using Axios
    - Ideally every integration with external API I'll put to the database or memory cache for performance matters, but at this case I didn't put the data into the database since it's a way too simple to do so.
  - `users` (service, module, dto, entity)
    - This folder handle users data entity structure.
    

## Installation Guide

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Limitation

Due to limited time, I haven't implemented unit testing properly.

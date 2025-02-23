# Notes API

This is a simple **RESTful Notes API** built with **Node.js, Express, TypeScript, and Prisma** using **PostgreSQL** as the database. The API allows users to create, retrieve, update, and delete notes.

## Features
- Create a new note
- Retrieve all notes (with optional pagination and search)
- Retrieve a single note by ID
- Update a note
- Delete a note
- Database management using Prisma ORM
- Docker support for PostgreSQL
- Code linting with ESLint
- TypeScript configuration for better development experience

## Technologies Used
- Node.js
- TypeScript
- Express.js
- Prisma ORM
- PostgreSQL
- Docker & Docker Compose
- ESLint (for code styling)

## Project Structure
```
├── src/
│   ├── controllers/
│   │   ├── note.controller.ts
│   ├── services/
│   │   ├── note.service.ts
│   ├── models/
│   │   ├── note.model.ts
│   ├── routes/
│   │   ├── note.routes.ts
│   ├── server.ts
├── prisma/
│   ├── schema.prisma
├── docker-compose.yml
├── Dockerfile
├── .gitignore
├── .env
├── package.json
├── tsconfig.json
├── README.md
```

## Installation & Setup
### 1. Clone the Repository
```sh
git clone <repo-url>
cd notes-api
```

### 2. Install Dependencies
```sh
yarn install
```

### 3. Start PostgreSQL with Docker
```sh
docker-compose up -d
```

### 4. Configure Environment Variables
Create a `.env` file and set:
```
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/notes
```

### 5. Apply Prisma Migrations
```sh
npx prisma migrate dev --name init
```

### 6. Start the Development Server
```sh
yarn dev
```

## API Endpoints
| Method | Endpoint         | Description          |
|--------|----------------|----------------------|
| POST   | `/notes`        | Create a new note   |
| GET    | `/notes`        | Get all notes       |
| GET    | `/notes/:id`    | Get a note by ID    |
| PUT    | `/notes/:id`    | Update a note       |
| DELETE | `/notes/:id`    | Delete a note       |
# iNotebook Backend

Welcome to the iNotebook Backend repository! This repository contains the backend code for the iNotebook application, a web-based note-taking platform. The backend is responsible for handling API requests, managing the database, and providing data to the frontend.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

The iNotebook Backend offers the following features:

- User authentication and authorization
- CRUD operations for notes
- Category management
- Search functionality
- RESTful API endpoints
- Error handling and validation
- Database persistence

## Installation

To get started with the iNotebook Backend, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/AnimeshA867/inotebook-backend.git
```

2. Navigate to the project directory:

```bash
cd inotebook-backend
```

3. Install the required dependencies:

```bash
npm install
```

4. Set up the environment variables. Create a `.env` file in the project root directory and provide the necessary values. You can use the `.env.example` file as a reference.

5. Start the server:

```bash
npm start
```

The server should now be running at `http://localhost:5000`.

## Usage

Once the server is up and running, you can start using the iNotebook application by connecting it to this backend. You can either build your own frontend or use the provided frontend repository for a complete end-to-end experience.

Make sure to set the appropriate environment variables in your frontend project to connect to the backend API.

## API Endpoints

The iNotebook Backend exposes the following API endpoints:

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Log in an existing user
- `POST /api/auth/logout` - Log out the current user
- `GET /api/notes` - Get all notes for the authenticated user
- `POST /api/notes` - Create a new note
- `GET /api/notes/:id` - Get a specific note by ID
- `PUT /api/notes/:id` - Update a specific note by ID
- `DELETE /api/notes/:id` - Delete a specific note by ID
- `GET /api/categories` - Get all categories for the authenticated user
- `POST /api/categories` - Create a new category
- `GET /api/categories/:id` - Get a specific category by ID
- `PUT /api/categories/:id` - Update a specific category by ID
- `DELETE /api/categories/:id` - Delete a specific category by ID
- `GET /api/search?q=searchTerm` - Search for notes matching the provided search term

Refer to the source code or API documentation for detailed information about request and response formats.

## Contributing

Contributions to the iNotebook Backend are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request. Make sure to follow the code style guidelines and write appropriate tests for any new features or bug fixes.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of this license.

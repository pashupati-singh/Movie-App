# Movie Management Server

# Deploy Links

https://movie-6cgo.onrender.com/ : server-side.

https://rainbow-faloodeh-3eb3e2.netlify.app/ : client-side.


## Overview

This server-side and client-side application provides APIs for managing movies. It includes features such as user registration, login, and CRUD operations for movies. Administrative privileges are required for adding and updating movie data.

## Features

### User Authentication

- **Register**: Allows users to create a new account.
- **Login**: Enables users to log in to their accounts securely.

### Movie Management

- **Add Movie**: Admins can add new movies to the database.
- **Update Movie**: Admins can update existing movie details.
- **Get Movies**: Retrieves a list of movies from the database.

API Endpoints

Authentication
POST /users/register: Register a new user.

POST /users/login: Log in and receive an authentication token.

Movie Management
POST /movies/add: Add a new movie (requires admin privileges).

PATCH /movies/update/:id: Update movie details by ID (requires admin privileges).


GET /movies: Get a list of all movies.

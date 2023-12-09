# Reach-Best Assignment
## Reach Best Full Stack Engineer Application 2023

## Description
The Book Matching Project is a web application that matches students with books based on criteria scores. The project uses Docker Compose to orchestrate containers for the frontend, backend, and PostgreSQL database.


## Table of Contents
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Docker Compose](#docker-compose)
- [Frontend](#frontend)
- [Backend](#backend)
- [Database](#database)
- [Contributing](#contributing)
- [License](#license)

## Project-Structure

book-matching-project/  
│
├── backend/  
│   ├── src/  
│     │   ├── controllers/  
│   │   │   ├── studentController.js  
│   │   │   ├── bookController.js  
│   │   │   └── matchController.js  
│   │   ├── models/  
│   │   │   ├── Student.js  
│   │   │   ├── Book.js   
│   │   │   └── Match.js  
│   │   ├── routes/  
│   │   │   ├── studentRoutes.js  
│   │   │   ├── bookRoutes.js  
│   │   │   └── matchRoutes.js  
│   │   ├── app.js  
│   │   └── server.js  
│   ├── Dockerfile  
│   └── package.json  
│  
├── frontend/   
│   ├── public/  
│   │   ├── index.html   
│   │   └── ...   
│   ├── src/   
│   │   ├── components/  
│   │   │   ├── StudentList.js   
│   │   │   ├── BookList.js     
│   │   │   └── MatchChart.js    
│   │   ├── services/            
│   │   │   ├── studentService.js    
│   │   │   ├── bookService.js    
│   │   │   └── matchService.js    
│   │   ├── App.js    
│   │   ├── index.js    
│   │   └── ...    
│   ├── Dockerfile    
│   └── package.json   
│  
├── nginx/   
│   └── nginx.conf
│    
├── docker-compose.yml   
│    
└── README.md    

## Usage
 
 Application is hosted on aws ec2 with docker and can be accessed on

``` 
      http://13.127.208.227:5000

```
Also clone and run locally.

## Docker Compose

The Book Matching Application uses Docker Compose to manage and orchestrate the containers for the frontend, backend, and database. The `docker-compose.yml` file defines the services, their configurations, and how they interact with each other.

### Services

#### 1. Frontend

The frontend service runs the React application and is accessible on port 5000.

#### 2. Backend

The backend service hosts the Node.js/Express application and exposes its API on port 3000.

#### 3. PostgreSQL Database

The PostgreSQL service provides the database backend for storing student, book, and matching data.

### Running Containers

To build and start the Docker containers, use the following command:

```bash
docker-compose up --build
```
Add ip address in VITE_BACKEND= in docker-compose.yml.  
In terminal type ifconfig paste the ip u get.(for linux users).

## Frontend

The frontend of the Book Matching Project is built using Vite and React. It serves as the user interface for interacting with the backend.

### Technologies Used

- **Vite**
- **React**
- **Tailwind CSS**
- **Shadcn UI**

### Running the Frontend

After starting the Docker containers using Docker Compose, you can access the frontend at [http://localhost:5000](http://localhost:5000).

## Backend

The backend of the Book Matching Project is built using Node.js and Express. It provides the API for handling requests related to students, books, and matching operations.

### Technologies Used

- **Node.js**
- **Express**
- **PostgreSQL(pg)**

### API Endpoints

- **Students:**
  - `GET /api/v1/students`: Get a list of all students/ add student
  - `GET /api/v1/students/:student_id`: Get details of a specific student.

- **Books:**
  - `GET /api/v1/books`: Get a list of all books/ add book
  - `GET /api/v1/books/:book_id`: Get details of a specific book.

## Database

The Book Matching Project uses PostgreSQL as the database backend to store information about students and books.

### Schema

The database schema is organized into tables corresponding to the key entities in the application.

#### 1. Students Table
Scores => 
1 - low,
2 - mid,
3 - high

- **Columns:**
  - `student_id` (Serial): Unique identifier for each student.
  - `student_name` (Text): Name of the student.
  - `g_crime` (Integer): Score for crime genre.
  - `g_mystery` (Integer): Score for mystery genre.
  - `g_thriller` (Integer): Score for thriller genre.
  - `a_time` (Integer): Score for reading time availability.
  - `d_level` (Integer): Score for difficulty level preference.

#### 2. Books Table

- **Columns:**
  - `book_id` (Serial): Unique identifier for each book.
  - `book_name` (Text): Name of the book.
  - `g_crime` (Integer): Score for crime genre.
  - `g_mystery` (Integer): Score for mystery genre.
  - `g_thriller` (Integer): Score for thriller genre.
  - `a_time` (Integer): Score for average reading time.
  - `d_level` (Integer): Score for difficulty level.

## Contributing

I welcome contributions from the community! If you'd like to contribute to the Book Matching Project.

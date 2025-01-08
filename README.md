Title: Node.js Express Server for Handling Routes and Middleware

This code sets up a Node.js server using the Express framework. It integrates multiple route handlers and employs middleware for logging and error handling. Below is an overview of its features:

Dependencies:

express: Framework for building web servers and APIs.
path: Built-in Node.js module for handling file paths.
Modules and Utilities:

hostRouter, postRouter, and userRouter: Route modules imported from the routes directory.
rootDir: Utility module for determining the root path of the project.
Middleware and Routing:

A logging middleware logs the URL and HTTP method for every incoming request.
Route modules (hostRouter, postRouter, and userRouter) handle specific routes.
A built-in middleware express.urlencoded() is used to parse URL-encoded request bodies.
Error Handling:

A fallback route responds with a 404.html page for unmatched routes.
Server Initialization:

The server listens on port 5006 and logs a message confirming its connection.
How to Run:

Ensure you have Node.js installed.
Install dependencies by running npm install.
Place the required route files (hostRouter, postRouter, userRouter) in the routes directory.
Include a 404.html file in the views directory.
Run the server with node <filename>.js and access it at http://localhost:5006.
This project is suitable for creating a modular Express server with dynamic route handling and basic error management.

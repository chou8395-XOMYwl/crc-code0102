# CRC Code-01 & Code-02

## Description
This is a full stack app that lists all orders using a paginated table, creates new orders, and retrieves individual orders using CustomerOrderID.

### Technologies Used
-   Express.js is used for the API to call data.
-   Nodemon Package is used to restart your Node.js app when file changes are detected.
-   SQL Server is used to store data used in this application.
-   React-Table Package is used to list all orders in a paginated table.
-   Node.js is used along with express to setup the backend of the app.
-   Cors is used as the middleware for the app.
-   MSSQL is used to communicate with our SQL server with Node.js
-   Insomnia used to test API Calls
-   MSSMS used to manage SQL queries

### Instructions for starting app
In the termianl install dependences
    - npm i express, nodemon, cors, React-Table, MSSQL
In dbFiles/db.Config.js 
    - Ensure that user, password, server, and database fields are correct with your local SQL server. Make sure the local SQL port is on the right port by looking for TCP Port in Windows Computer Management --> SQL Server Network Configuration --> Protocols for SQLEXPRESS
To start the app, input 'npm run dev' to start the react app and the backend.
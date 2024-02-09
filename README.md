## Project Name

E-Commerce Back End



## Version

1.0.0 Deployment Date: 2024-02-08 Contributors: Luis Llamas



## Description

This project serves as the back-end for an e-commerce website, designed to manage the complexities of online retail operations through a robust API. Built with Express.js and leveraging Sequelize as an ORM (Object-Relational Mapping) tool, it facilitates seamless interactions with a MySQL database, enabling efficient CRUD (Create, Read, Update, Delete) operations on essential entities such as products, categories, and tags.

The use of ORM techniques not only simplifies database transactions but also enhances development efficiency by abstracting SQL queries into JavaScript, allowing for a more intuitive and productive development process. This architecture makes it an ideal solution for developers looking to construct or expand e-commerce platforms with a scalable, maintainable, and secure back-end system.



## Technologies Used

- **Node.js**: An open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser. Node.js allows developers to use JavaScript to write command-line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.

- **Express.js**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It facilitates the rapid development of Node-based web applications and is known for its performance and minimalist structure.

- **MySQL**: A popular open-source relational database management system. It uses structured query language (SQL) for managing and manipulating relational databases. MySQL is known for its reliability, scalability, and flexibility in storing structured data efficiently.

- **Sequelize ORM**: Sequelize is a promise-based Node.js ORM (Object-Relational Mapping) for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication, and more. Sequelize abstracts database access and enables developers to interact with various databases using JavaScript objects and syntax rather than SQL queries.

- **dotenv**: A zero-dependency module that loads environment variables from a `.env` file into `process.env`. This enables the application to configure different environments easily, keeping sensitive credentials like database passwords secure and out of the version control system.



## Installation Steps

Follow these steps to set up and run the e-commerce back-end application on your local machine:

1. **Clone the Repository**: First, clone the repository to your local machine. You can do this by running:


   git clone https://github.com/maslla100/e-commerce.git


   Replace `https://github.com/maslla100/e-commerce.git` with the actual URL of your repository if different.

2. **Navigate to the Project Directory**:

   Change into the project directory:


   cd e-commerce


3. **Install Dependencies**: Install all necessary dependencies by running:


   npm install
   

   This command installs Express, Sequelize, MySQL2, dotenv, and any other dependencies listed in your `package.json` file.

4. **Set Up MySQL Database**:

   - Open the MySQL shell:


     mysql -u root -p
     

     Enter your MySQL root password when prompted.

   - Create the database:

     sql
     CREATE DATABASE ecommerce_db;
     

     Exit the MySQL shell:

     sql
     exit;
     

5. **Seed the Database**:

   Populate your database with the provided seed data:


   npm run seed
   

6. **Configure Environment Variables**:

   Create a `.env` file in the root directory of the project to store your MySQL credentials. Add the following lines, replacing the placeholders with your actual data:

   env
   DB_NAME=ecommerce_db
   DB_USER=your_mysql_username
   DB_PASS=your_mysql_password
   DB_HOST=localhost
   

   Note: The `DB_NAME` should match the name of the database you created (`ecommerce_db`).

7. **Run the Application**:

   Start the application by running:


   npm start
   

   The application will now be running and listening for requests. You can test the API endpoints using a tool like Postman or Insomnia.



The following image shows the application being tested on insomnia:

![E-commerce app running on Insomnia".](sample.png)

## Video Demonstration
[Link to Walkthrough Video](#) - https://www.loom.com/share/7c375f0ecc3443e6b9de2ac94750d51b?sid=746bcb88-5560-404a-a811-0307ff76b899

## GitHub project URL: https://github.com/maslla100/e-commerce







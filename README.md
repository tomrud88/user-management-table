# User Management Table with Redux Toolkit and Typescript

![image alt](https://github.com/tomrud88/user-management-table/blob/master/table.png?raw=true)

# Overview
This project demonstrates the creation of a user management table using React, Redux Toolkit, and TypeScript. The table fetches user data from a mock API and provides local filtering capabilities. The main focus is on managing state using Redux Toolkit while maintaining type safety with TypeScript.

# Features
1. User Management Table:
The application includes a user management table that displays the following user information:

- Name
- Username
- Email
- Phone
The data is fetched from a mock API, and the table layout is designed to be both functional and visually appealing.
2. Advanced Filtering:
A search feature is integrated to filter the user information based on:

- Name
- Username
- Email
- Phone
The filtering is dynamic, meaning the results update in real time as the user types into the search inputs.
3. State Management with Redux Toolkit:
   The application uses Redux Toolkit for state management. Redux Toolkit provides a more streamlined approach for managing global state, making use of tools like createSlice and configureStore.
4. TypeScript for Type Safety:
   TypeScript is employed throughout the application to ensure type safety, making the code more predictable and reducing potential runtime errors.

# Technologies Used
- React: For building the user interface.
- Redux Toolkit: For managing global state more efficiently.
- TypeScript: To enforce type safety and improve code quality.
- CSS: For styling the table and layout.

# How to Run the Project
1. Clone the repository: 
   bash
   git clone <repository-url>
   cd <repository-folder>

2. Install the dependencies:
   bash
   npm install

3. Start the deployment server:
   bash
   npm start
4. Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

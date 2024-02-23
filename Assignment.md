### React Developer Assignment: Transaction Table Component

#### Objective

Create a single-component React application that displays transaction data in a table. This application should fetch mock transaction data and allow users to sort and filter through the transactions. A sample `transactions.json` is provided to you as the sample data, use it.

#### Time Allocation

This task is designed to be completed within 2 hours.

#### Transaction Data Schema

| Field       | Type   | Description                                                           |
| ----------- | ------ | --------------------------------------------------------------------- |
| id          | String | Unique identifier for the transaction                                 |
| date        | Date   | The date and time the transaction occurred                            |
| amount      | Number | Amount of the transaction (positive for income, negative for expense) |
| currency    | String | Currency of the transaction (e.g., USD, EUR, NGN)                     |
| type        | String | Type of transaction (e.g., "income", "expense")                       |
| category    | String | Category of the transaction (e.g., "food", "utilities")               |
| accountName | String | Name of the account from which the transaction was made               |

#### Features

1. **Fetch Data**: Simulate fetching data to represent an API call.
2. **Display Data**: Show the transaction data in a table, ensuring visibility for all fields.
3. **Sort and Filter**: Implement sorting (on date and amount) and filtering (on currency, type and category) functionalities for the transaction data.

#### Technical Requirements

- Use **React** for frontend development. Bootstrap your project with either **~** or **Vite**.
- Implement state management as needed to manage the application's data and UI state.
- Use **Tailwind CSS** for styling the application.
- The application should consist of a single screen but you can split the components into different files if it improves code maintainability.
- Use React hooks to manage state and effects

#### Submission Guidelines

- Your project must be hosted on GitHub, including a README with instructions on how to install, run, and deploy your application.
- Where applicable, include comments in your code to explain your logic.
- Deployment of your application is required. Use platforms like Netlify, Vercel, or GitHub Pages and provide the deployed application URL.

#### Evaluation Criteria

- **Functionality**: The application must function as described, with working sorting and filtering capabilities.
- **Code Quality**: The code should be well-structured, clean, and include necessary comments.
- **UI Design**: The application should utilize Tailwind CSS effectively to create a visually appealing interface.

This assignment focuses on your ability to create a functional and visually appealing single-component React application using Tailwind CSS, with an emphasis on handling data, state management, and deployment.

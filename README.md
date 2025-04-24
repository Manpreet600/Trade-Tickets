# Trade-Tickets

**Trade-Tickets** is a web-based platform designed to streamline the process of managing and tracking trade-related tickets. It offers a user-friendly interface for creating, updating, and monitoring trade tickets, ensuring efficient workflow and record-keeping.

## Features

- **User Authentication:** Secure login and registration system to protect user data.
- **Ticket Management:** Create, update, and delete trade tickets with ease.
- **Dashboard:** Overview of all active and closed tickets.
- **Search and Filter:** Quickly find tickets based on various criteria.
- **Responsive Design:** Accessible on desktops, tablets, and mobile devices.

## Technologies Used

- **Frontend:**
  - React.js
  - Redux for state management
  - Tailwind CSS for styling

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB for database management

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Manpreet600/Trade-Tickets.git
   cd Trade-Tickets
   ```

2. **Install frontend dependencies:**

   ```bash
   cd client
   npm install
   ```

3. **Install backend dependencies:**

   ```bash
   cd ../server
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the `server` directory and add the following:

   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

5. **Run the application:**

   - Start the backend server:

     ```bash
     cd server
     npm start
     ```

   - Start the frontend development server:

     ```bash
     cd ../client
     npm start
     ```

   The application should now be running at `http://localhost:3000`.

## Usage

1. **Register an account:** Navigate to the registration page and create a new account.
2. **Login:** Use your credentials to log in.
3. **Create Tickets:** Use the dashboard to create new trade tickets.
4. **Manage Tickets:** Update or delete existing tickets as needed.
5. **Search and Filter:** Utilize the search functionality to find specific tickets.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## Contact

For any questions or feedback, please contact [Manpreet600](https://github.com/Manpreet600).

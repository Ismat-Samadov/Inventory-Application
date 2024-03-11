# Inventory Application

This is a simple inventory management application built with Node.js, Express, and MongoDB.

## Features

- Add, edit, and delete items
- View list of items
- Search for items by name, category, or description

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ismat-Samadov/Inventory-Application.git
   ```

2. Install dependencies:

   ```bash
   cd Inventory-Application
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following variables:

   ```
   PORT=3000
   MONGODB_URI=yourMONGOconnectionString
   ```

   Adjust the MongoDB URI as needed.

4. Start the application:

   ```bash
   npm start
   ```

5. Access the application in your web browser:

   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

- Navigate to the homepage to view the list of items.
- Use the navigation bar to add, edit, or delete items.
- Search for items by name, category, or description.

## Dependencies

- Express
- Mongoose
- EJS

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.


netstat -aon | findstr 27017

tasklist | findstr 3048



# RR Farming

**RR Farming** is an E-Commerce platform developed for a local client. The platform aims to offer an online marketplace for purchasing a variety of products, such as rabbit meat, organic vegetables, chicken meat, and eggs.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About

RR Farming is designed to provide a seamless online shopping experience for customers looking to buy fresh, organic, and locally-sourced products. The platform supports a range of products and ensures secure transactions and user satisfaction.

## Features

- User registration and login
- Product browsing and searching
- Shopping cart and checkout
- Admin panel for managing products and orders

## Technologies Used

### Frontend

- **React**: JavaScript library for building user interfaces
- **HTML/CSS**: Markup and styling
- **Vercel**: Deployment platform

### Backend

- **Node.js**: JavaScript runtime
- **Express**: Web framework for Node.js
- **MongoDB**: NoSQL database
## Installation

To run the project locally, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/mrahmadhassankhan/RR-Farming
    ```

2. **Navigate to the project directory**:
    ```sh
    cd RR-Farming
    ```

3. **Install dependencies for both frontend ,backend and admin as well**:
    ```sh
    cd admin
    npm i
    cd..
    cd frontend
    npm i
    cd..
    cd backend
    npm i
    ```

4. **Create a `.env` file in the backend directory and add your environment variables**:
    ```env
    DB_URI=your_mongo_database_uri
    JWT_SECRET=your_jwt_secret
    ```

5. **Start the backend server**:
    ```sh
    cd backend
    npm run dev
    ```

6. **Start the frontend server**:
    ```sh
    cd frontend
    npm start
    ```
6. **Start the Admin Panel**:
    ```sh
    cd admin
    npm start
    ```
## Usage

The frontend of the application is deployed on Vercel and can be accessed [here](https://rr-farming.vercel.app/).

To use the application locally, navigate to `http://localhost:6464` for the frontend and `http://localhost:1783` for the backend and lastly for admin panel `http://localhost:6463` .

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a new branch** (`git checkout -b feature/your-feature`)
3. **Commit your changes** (`git commit -m 'Add some feature'`)
4. **Push to the branch** (`git push origin feature/your-feature`)
5. **Open a pull request**

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Ahmad Hassan Khan - [mrahmadhassankhan](https://www.linkedin.com/in/mrahmadhassankhan) - codewithahk@gmail.com

Project Link: [https://github.com/mrahmadhassankhan/RR-Farming](https://github.com/mrahmadhassankhan/RR-Farming)

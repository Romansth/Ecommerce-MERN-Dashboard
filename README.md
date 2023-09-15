# MERN Stack Admin Dashboard Project

This repository showcases a comprehensive admin dashboard application built using the MongoDB, Express.js, React, and Node.js (MERN) stack. 

### Demo link: https://ecommerce-mern-dashboard-frontend.onrender.com

### Screenshot:
<img width="1508" alt="image" src="https://github.com/Romansth/Ecommerce-MERN-Dashboard/assets/53575561/6e79b8e5-6eb3-45a9-8763-ff66d29ba5e2">

## Features

- **Responsive UI:** The frontend is designed using Material UI components for a visually appealing and responsive user interface.
- **Data Visualization:** Utilizing Nivo Charts, the project offers insightful data visualizations for better data interpretation.
- **Data Management:** Redux Toolkit and Redux Toolkit Query manage data efficiently, enhancing user experience.
- **Powerful Backend:** The backend is built on Node.js, Express.js, Mongoose, and MongoDB, ensuring robust data handling.
- **Multiple Pages:** Explore various pages including Products, Customers, Transactions, and more, each with distinct functionalities.

## Technologies Used

- MongoDB
- Express.js
- React
- Node.js
- Material UI
- Material UI Data Grid
- Nivo Charts
- Redux Toolkit
- Redux Toolkit Query
- Mongoose
- RESTful APIs

## Project Structure

- `server/`: Backend source code and configuration files.
- `client/`: Frontend source code, components, and styles.
- `screenshots/`: Screenshots showcasing the application's different pages.

## Getting Started

###  Prerequisites
- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) 
- [npm](https://nodejs.org/en/download/package-manager/)

###  Clone the repository
```terminal
$ git clone https://github.com/Romansth/Ecommerce-MERN-Dashboard.git
```


###  Client-side usage
```terminal
$ cd client    
$ echo "REACT_APP_BASE_URL= http://localhost:5002" >> src/.env.local  
$ npm i  
$ npm run build
$ npm start
```

### Server-side usage

#### npm install
```terminal
$ cd server  
$ npm i      
```

#### Setup Mongodb

Create an account on [MongoDB](https://mongodb.com). Create a new database. Go to `connect` -> `node js` -> copy the token.

Create a `.env` file in the server base directory and add the following:
```bash
MONGO_URL = 'YOUR_MONGODB_TOKEN'
PORT= 5002
```

Next, go to `/server/index.js` and uncomment these lines:

```javascript
data imports
import  User  from  "./models/User.js";
import  Product  from  "./models/Product.js";
import  ProductStat  from  './models/ProductStat.js';
import  Transaction  from  './models/Transaction.js';
import  OverallStat  from  './models/OverallStat.js';
import  AffiliateStat  from  './models/AffiliateStat.js';
import {
dataUser, dataProduct, dataProductStat, dataTransaction, dataOverallStat, dataAffiliateStat
} from  "./data/index.js";
```

```javascript
/* ONLY ADD DATA ONE TIME */
AffiliateStat.insertMany(dataAffiliateStat);
OverallStat.insertMany(dataOverallStat);
Transaction.insertMany(dataTransaction);
Product.insertMany(dataProduct);
ProductStat.insertMany(dataProductStat);
User.insertMany(dataUser);
```
Then, start the server
```terminal    
$ npm run dev 
```

Stop the server after it runs. This will push the demo data to your mongodb database.

#### Run backend

```terminal   
$ npm run dev 
```

## Final App
Access the web app on `https://localhost:5002`.

(Note: both `client` and `server` should run concurrently for the web app to function.)

## Usage

1. Explore the `client/` directory to understand the UI components and data visualizations.
2. Refer to the code in the `server/` directory to grasp the API endpoints and data handling.


## License

This project is licensed under the MIT License.

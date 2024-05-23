<h1 align="center">Recipe Finder</h1>

## Introduction:
Recipe Finder is a web application that helps users find recipes.


<p align="center">Tech Stack:</p>
<p align="center">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=white"> 
    <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E">
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
    <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white">
</p>

## Versions Used

- Node.js: v20.11.1
- React: v18.2.0


## Configure and run on local environment
**Project directory/folder structure:**
* client (Frontend) : This folder contains all the code related to Frontend part.
* server (Backend) : This folder contains all the code related to Backend part.

**Setting up project locally (Installation) :**
1. Fork the repository

2. Clone Your Forked Repository:

```sh
git clone https://github.com/<your_username>/recipe-finder.git
```
**Client (Frontend)** 

3. Navigate to the Client Directory:

```sh
cd recipe-finder/client
```

4. Install Dependencies:

```sh
npm install
```

5. Start the Application:

```sh
npm run dev
```
The client will be running on http://localhost:5173/ in your browser.  

**Server (Backend)**

1. Navigate to the Server Directory:

```sh
cd recipe-finder/server
```

2. Install Dependencies:

```sh
npm install
```

3. Start the server

```sh
npm run dev
```
**Note :** Create a ```.env``` file in the root of ```server``` directory and add the following entities in that .env file

```sh
MONGODB_URI=mongodb+srv://yourUsername:yourPassword@cluster0.mongodb.net/yourDatabaseName?retryWrites=true&w=majority&appName=YourAppName
PORT = 9999
```

## How to contribute 👨‍💻
- Have a look at [CONTRIBUTING.md](.github/CONTRIBUTING.md) for contribution guidelines.  


## License 🛡️ 

This project is licensed under the terms of the MIT license. See the LICENSE file for details.
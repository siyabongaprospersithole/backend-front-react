## Web APp Using Node as Backend And React as Front



## Tech / Framework used | Node
#### Built with:
- CORS
- Express
- Sqlite3

## Tech / Framework used | React
#### Built with:
- Axios

```bash
# clone this repository
git clone https://github.com/siyabongaprospersithole/react-app.git

```
## Backend Setup - Node

```bash
## cd to backend folder
cd backend

# Install NPM
npm i

## For Simplicity, the application is using SQLite, so you will need to create the seed of the brands:

node database/migration/brands_seed.js

# run the backend server to get the url for the post calls on your react app:
node index.js

# copy the url to frontend .env file
```


## Frontend Setup - React

```bash
## cd to backend folder
cd frontend-react

# Install NPM
npm i

# Replace .env.example to .env
cp .env.example .env

# Copy the endpoint of the backend API to the `.env` file
# Replace the `.env` variable `REACT_APP_API_BASE_URL=""` with the correct endpoint

# Run react app
npm run dev
```


# NB:
we using Parcel build for the project

import express from "express";0
import dotenv from "dotenv"
import Connection from './database/db.js'
import DefaultData from './default.js'

dotenv.config();

const USERNAME = process.env.DB_USERNAME 
const PASSWORD = process.env.DB_PASSWORD
const app = express(USERNAME , PASSWORD);
const port = 8000
Connection(USERNAME, PASSWORD);
app.listen(port, ()=> console.log(`listening on port running on `));

DefaultData();
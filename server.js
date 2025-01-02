// ./server.js

import app from './app.js';    // express imported
import './db/sync.js';            // DB connected and synced
import dotenv from 'dotenv'

dotenv.config()        // .env

const port = process.env.SERVERPORT

app.listen(port,()=>{
    console.log(`SERVER RUNNING ON PORT ${port}`);
})
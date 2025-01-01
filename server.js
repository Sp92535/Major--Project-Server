// ./server.js

const app = require('./app')    // express imported
require('./db/sync')            // DB connected and synced
require('dotenv').config()        // .env

const port = process.env.SERVERPORT

app.listen(port,()=>{
    console.log(`SERVER RUNNING ON PORT ${port}`);
})
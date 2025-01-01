// ./db/sync.js

const { sequelize } = require('./index.js');

// Register the models here
const User = require('../models/User');


const syncDatabase = async () => {
    try {
        await sequelize.sync({ force: true });  // Drops the table if it exists and creates a new one
        console.log('Database synced!');
    } catch (error) {
        console.error('Error syncing database:', error);
    }
};

syncDatabase();
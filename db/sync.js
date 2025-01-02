// ./db/sync.js

import { sequelize } from './index.js';

// Register the models here
import User from '../models/User.js';


const syncDatabase = async () => {
    try {
        await sequelize.sync({ force: true });  // Drops the table if it exists and creates a new one
        console.log('Database synced!');
    } catch (error) {
        console.error('Error syncing database:', error);
    }
};

syncDatabase();
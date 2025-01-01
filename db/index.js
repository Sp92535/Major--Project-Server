// ./db/index.js

const { Sequelize } = require('sequelize');
require('dotenv').config()

const sequelize = new Sequelize({
  host: process.env.PGHOST,
  dialect: 'postgres',
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT,
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

connectDB();
module.exports = { sequelize }
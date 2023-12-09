const { Client } = require('pg');

const client = new Client({
  user: `${process.env.DB_USER}` || 'postgres',
  host: `${process.env.DB_HOST}` || 'localhost',
  database: `${process.env.DB_NAME}` || 'postgres',
  password: `${process.env.DB_PASSWORD}` || 'postgres',
  port: process.env.DB_PORT || 5432,
});

module.exports = client;
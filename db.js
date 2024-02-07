/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client({
    // "postgresql:///lunchly"
    user: 'postgres',
    host: 'localhost',
    database: 'lunchly',
    password: 'postgres',
    port: 5432
});

db.connect();

module.exports = db;

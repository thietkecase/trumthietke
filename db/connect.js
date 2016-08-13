var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "../db/tksaigon.sqlite"
  }
});

module.exports = knex;
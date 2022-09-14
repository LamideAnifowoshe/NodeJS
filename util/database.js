const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "27111997", {
  dialect: "mysql",
  host: "localhost",
});

// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "node-complete",
//   password: "27111997",
// });

// module.exports = pool.promise();

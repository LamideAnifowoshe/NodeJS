const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://mainuser:Amazing01.@clusterexpress.ielab8o.mongodb.net/?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected!");
      return client.db();
      // console.log(_db);

      // callback();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  } else {
    return mongoConnect;
  }
  throw "No database found!";
};

module.exports = mongoConnect;
exports.getDb = getDb;
// const Sequelize = require("sequelize");

// const sequelize = new Sequelize("node-complete", "root", "27111997", {
//   dialect: "mysql",
//   host: "localhost",
// });

// module.exports = sequelize;

// const mysql = require("mysql2");

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   database: "node-complete",
//   password: "27111997",
// });

// module.exports = pool.promise();

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

// const mongoConnect = (callback) => {
//   MongoClient.connect(
//     "mongodb+srv://mainuser:Amazing01.@clusterexpress.ielab8o.mongodb.net/?retryWrites=true&w=majority"
//   )
//     .then((client) => {
//       console.log("Connected!");
//       _db = client.db("lammy");
//     })
//     .catch((err) => {
//       console.log(err);
//       throw err;
//     });
// };

const getDb = async () => {
  try {
    const client = new MongoClient(
      "mongodb+srv://mainuser:Amazing01.@clusterexpress.ielab8o.mongodb.net/?retryWrites=true&w=majority"
    );

    // (await MongoClient.connect(
    //   "mongodb+srv://mainuser:Amazing01.@clusterexpress.ielab8o.mongodb.net/?retryWrites=true&w=majority"
    // )).;

    const db = client.db("ShoppingPageDb");
    // console.log("Connected!");
    return db;
  } catch (error) {
    console.dir(error);
  }

  // console.log(_db);

  // callback();
  // })
  // .catch((err) => {
  //   console.log(err);
  //   throw err;
  // });
};

// module.exports = mongoConnect;
module.exports = getDb;
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

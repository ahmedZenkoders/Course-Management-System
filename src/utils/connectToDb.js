const database = require("mysql");


const initializeDb = () => {
  try {
    const dbConnection = database.createPool({
      port: "3306",
      host: process.env.HOST,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      username:process.env.USERNAME
    });
    if (dbConnection) {
      console.log(`Successfully Connected to ${process.env.DATABASE}`);
      return dbConnection;
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = { initializeDb };

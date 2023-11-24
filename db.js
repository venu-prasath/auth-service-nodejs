const { Sequelize } = require("sequelize");

const sequelizeInMemory = new Sequelize("sqlite::memory:");

const sequelizePersistentSqlite = new Sequelize({
  dialect: "sqlite",
  storage: "./db/database.sqlite",
});

//todo: Postgres implementation and removal of sqlite

async function test_db_connections() {
  try {
    await sequelizeInMemory.authenticate();
    console.log("Connection for in memory sqlite successful.");
    await sequelizePersistentSqlite.authenticate();
    console.log("Connections for persistence successful");
  } catch (error) {
    console.error("Unable to connect to database: ", error);
  } finally {
    sequelizeInMemory.close();
    sequelizePersistentSqlite.close();
  }
}

test_db_connections();

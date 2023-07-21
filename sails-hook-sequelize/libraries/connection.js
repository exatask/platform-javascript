const { Sequelize } = require("sequelize");

const errorMethod = function(sails, method) {

  sails.log.error(`'${method}' operation is not allowed`);
  throw new Error(`'${method}' operation is not allowed`);
}

const configureHooks = function(sails) {

  return {
    beforeDestroy: function() {
      return errorMethod(sails, "beforeDestroy");
    },
    beforeBulkDestroy: function() {
      return errorMethod(sails, "beforeBulkDestroy");
    }
  };
}

module.exports = function(sails, config) {

  let options = {
    dialect: config.dialect,
    host: config.host,
    port: config.port,
    pool: config.pool,
    define: {
      freezeTableName: true
    },
    hooks: configureHooks(sails)
  };

  try {
    return new Sequelize(config.database, config.username, config.password, options);
  } catch (error) {
    sails.log.error("Sequelize connection failed: " + error.message);
  }
}

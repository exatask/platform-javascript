const mongoose = require("mongoose");

module.exports = function(sails, config) {

  let options = {
    autoIndex: false
  };
  const connection = mongoose.createConnection(config.uri, options);

  connection.on("connecting", function() {
    sails.log.verbose("Mongoose connecting");
  });

  connection.on("connected", function() {
    sails.log.verbose("Mongoose connected successfully");
  });

  connection.on("disconnecting", function() {
    sails.log.warn("Mongoose disconnecting");
  });

  connection.on("disconnected", function() {
    sails.log.warn("Mongoose disconnected successfully");
  })

  connection.on("close", function() {
    sails.log.warn("Mongoose connection closed successfully");
  });

  connection.on("reconnected", function() {
    sails.log.verbose("Mongoose reconnected successfully");
  });

  connection.on("error", function(error) {
    sails.log.error("Mongoose connection encountered error: " + error.message);
  });

  return connection;
}

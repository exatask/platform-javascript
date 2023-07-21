const util = require("util");
const { format } = require("winston");

module.exports = format.printf(function(data) {

  let logData = {
    timestamp: data.timestamp,
    level: data.level,
    message: data.message
  };

  return util.format("%j", logData);
});

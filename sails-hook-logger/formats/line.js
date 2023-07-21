const { format } = require("winston");

module.exports = format.printf(function(data) {

  let logData = `${data.timestamp} ${data.level} ${data.message}`;
  return logData;
});

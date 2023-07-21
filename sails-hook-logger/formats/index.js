const lineFormat = require("./line");
const jsonFormat = require("./json");

module.exports = function(format) {

  switch (format) {

    case "line":
      return lineFormat;

    case "json":
      return jsonFormat;

    default:
      return lineFormat;
  }
}

const { format, transports } = require("winston");
require("winston-daily-rotate-file");

const loggerFormat = require("./../formats/index");

module.exports = function(config) {

  let loggerConfig = {
    level: config.level || "info",
    format: format.combine(format.timestamp(), format.json(), loggerFormat(config.format))
  }

  switch(config.type) {

    case "console":
      return new transports.Console(loggerConfig);

    case "file":
      loggerConfig.filename = config.filename;
      return new transports.File(loggerConfig);

    case "rotateFile":
      loggerConfig.filename = config.filename;
      loggerConfig.datePattern = config.datePattern;
      loggerConfig.zippedArchive = !!config.zippedArchive;
      return new transports.DailyRorateFile(loggerConfig);

    default:
      return new transports.Console(loggerConfig);
  }
}

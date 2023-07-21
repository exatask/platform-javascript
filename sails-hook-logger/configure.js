const { createLogger } = require("winston");
const transport = require("./transports/index");

module.exports = function() {

  const startTime = new Date();
  let transports = [];

  _.forEach(sails.config.log.transports, function (config) {

    if (!config.enabled) {
      return;
    }

    transports.push(transport(config));
  });

  sails.config.log.custom = createLogger({
    exitOnError: false,
    transports: transports
  });

  const endTime = new Date();
  sails.log.verbose(`logger prepared successfully. (${endTime - startTime}ms)`);
};

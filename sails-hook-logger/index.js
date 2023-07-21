const configure = require("./configure");

module.exports = function(sails) {
  return {
    defaults: {
      log: {
        transports: {
          default: {
            enabled: true,
            level: 'info',
            format: 'line',
            type: 'console'
          }
        }
      }
    },
    configure: configure
  };
};

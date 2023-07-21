const configure = require("./configure");
const initialize = require("./initialize");

module.exports = function logger(sails) {
  return {
    defaults: {},
    configure: configure,
    initialize: async function() {
      await initialize(sails);
    }
  }
};

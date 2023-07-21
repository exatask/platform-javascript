const configure = require("./configure");
const initialize = require("./initialize");

module.exports = function(sails) {
  return {
    defaults: {},
    configure: configure,
    initialize: async function() {
      await initialize(sails);
    }
  }
};

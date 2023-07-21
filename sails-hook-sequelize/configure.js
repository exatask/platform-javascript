const prepareConfig = function(config) {

  config.host = config.host || "127.0.0.1";
  config.port = config.port || 3306;
  config.username = config.username || null;
  config.password = config.password || null;
  config.database = config.database || null;
  config.dialect = config.dialect || 'mysql';

  config.pool = {};
  if (config.poolSize) {
    config.pool.max = poolSize;
  }

  return config;
};

module.exports = function() {

  const datastores = sails.config.datastores;

  for (const key in datastores) {
    if (datastores[key].adapter === "@exatask/sails-sequelize") {
      sails.config.datastores[key] = prepareConfig(datastores[key]);
    }
  }
}

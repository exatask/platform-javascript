const prepareOptions = function(config) {

  const authDatabase = config.authDatabase || config.database || '',
    poolSize = config.poolSize || 0,
    readPreference = config.readPreference || 'primary',
    journal = config.journal || true,
    writeConcern = config.writeConcern || '';

  let options = {
    readPreference: readPreference,
    journal: journal
  };
  if (authDatabase) {
    options.authSource = authDatabase;
  }
  if (poolSize > 0) {
    options.maxPoolSize = poolSize;
  }
  if (writeConcern) {
    options.w = writeConcern;
  }

  return options;
}

const prepareUri = function(config) {

  const host = config.host || "127.0.0.1",
    port = config.port || 27017,
    username = config.username || '',
    password = config.password || '',
    database = config.database || '';

  let options = [],
    allOptions = prepareOptions(config);
  for (let key in allOptions) {
    options.push(`${key}=${allOptions[key]}`);
  }

  let uri = "mongodb://";
  if (username && password) {
    uri += `${username}:${password}@`;
  }
  uri += `${host}:${port}`;
  if (database) {
    uri += `/${database}`;
  }
  uri += `?${options.join('&')}`;

  return uri;
}

const prepareConfig = function(config) {

  config.uri = prepareUri(config);
  return config;
};

module.exports = function() {

  const datastores = sails.config.datastores;

  for (const key in datastores) {
    if (datastores[key].adapter === "@exatask/sails-mongoose") {
      sails.config.datastores[key] = prepareConfig(datastores[key]);
    }
  }
}

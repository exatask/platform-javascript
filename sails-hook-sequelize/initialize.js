const path = require("path");
const util = require("util");
const promise = require("promise");
const includeAll = require("include-all");

const connection = require("./libraries/connection");
const schema = require("./libraries/schema");

includeAll.optional = util.promisify(includeAll.optional);

const createConnections = function(sails) {

  const datastores = sails.config.datastores;
  let connectionList = {};
  for (const key in datastores) {
    if (datastores[key].adapter === "@exatask/sails-sequelize") {
      connectionList[key] = connection(sails, datastores[key]);
    }
  }
  return connectionList;
};

const loadSchemas = async function(sails) {

  let schemas = {};
  try {

    schemas = await includeAll.optional({
      dirname: path.resolve("api/models"),
      filter: /(.+)Model\.js$/,
      identity: false,
      optional: true,
      flatten: true,
      keepDirectoryPath: false
    });

  } catch(error) {
    sails.log.error("Schema loading failed: " + error.message);
  }
  return schemas;
};

const initializeSchemas = async function(sails, connections, schemas) {

  let schemaPromises = [];
  for (const key in schemas) {

    if (!schemas[key].datastore) {
      schemas[key].datastore = "default";
    }

    const connection = connections[schemas[key].datastore];
    if (connection) {
      schemaPromises.push(schema(sails, connection, schemas[key]));
    }
  }

  await promise.all(schemaPromises);
};

module.exports = async function(sails) {

  const startTime = new Date();

  const connections = createConnections(sails);
  const schemas = await loadSchemas(sails);

  await initializeSchemas(sails, connections, schemas);

  const endTime = new Date();
  sails.log.verbose(`sequelize prepared successfully. (${endTime - startTime}ms)`);
};

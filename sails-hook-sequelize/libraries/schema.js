module.exports = async function(sails, connection, schema) {

  let options = {
    tableName: schema.model || '',
    deletedAt: false
  }
  global[schema.globalId] = connection.define(schema.globalId, schema.schema, options);

  sails.log.verbose(`Initialized model: ${schema.globalId} successfully`);
}

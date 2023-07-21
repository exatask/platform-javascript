const mongoose = require("mongoose");

const errorMethod = function(sails, method) {

  sails.log.error(`'${method}' operation is not allowed`);
  throw new Error(`'${method}' operation is not allowed`);
}

const registerPreHooks = function(sails, schema) {

  schema.pre("deleteMany", function() {
    return errorMethod(sails, "deleteMany");
  });

  schema.pre("deleteOne", function() {
    return errorMethod(sails, "deleteOne");
  });

  schema.pre("findOneAndDelete", function() {
    return errorMethod(sails, "findOneAndDelete");
  });

  schema.pre("findOneAndRemove", function() {
    return errorMethod(sails, "findOneAndRemove");
  })

  schema.pre("remove", function() {
    return errorMethod(sails, "remove");
  });
}

module.exports = async function(sails, connection, schema) {

  let schemaOptions = {
    versionKey: false,
    autoIndex: false
  }

  if (schema.model) {
    schemaOptions.collection = schema.model;
  }

  const mongooseSchema = mongoose.Schema(schema.schema, schemaOptions);
  registerPreHooks(sails, mongooseSchema);

  global[schema.globalId] = connection.model(schema.globalId, mongooseSchema);
  sails.log.verbose(`Initialized model: ${schema.globalId} successfully`);
};

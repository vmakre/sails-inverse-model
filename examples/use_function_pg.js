var sim = require('../index');

var config = {
  host: "localhost",
  database: "my_postgredb",
  user: "postgres",
  pass: "root",
  port: 5432,
  schema: "public"
};

var folder_api = "/your/project/strapi/generatedapi/";

sim.generatepg(config, folder_api);

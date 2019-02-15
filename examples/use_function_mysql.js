var sim = require('../index');

var config = {
  host: "localhost",
  database: "my_db",
  user: "root",
  password: "root",
  port: 3306
};

var folder_api = "/your/project/strapi/generatedapi/";

sim.generatemy(config, folder_api);

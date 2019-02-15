var sim = require('../index');

var folder_api = "/your/project/strapi/generatedapi/";

//                host      port         database         views            models          controllers
//sim.generatemg('localhost', 27017, 'my_name_collection', folder_views, folder_models, folder_controllers);

sim.generatemg('localhost', 27017, 'my_db_collection', folder_api);


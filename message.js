require('./configs/color');

exports.message = [
  color("                .-..-.																		      ", "blue"),
  "																																							",
  color("Sails", "yellow") + color("-inverse", "blue") + color("-model", "red") + color("<|    .-..-.	" + require('./package.json').version, "green"),
  color("                    |\										", "green"),
  color("    ~    ~   ~     /|.\ 									", "green"),
  color("       ~  ~       / || \									", "green"),
  color("         ~  ~   ,'  |'  \									", "green"),
  color("             .-'.-==|/_--'								", "green"),
  color("             `--'-------' 								", "green"),
  color("   _--__--_---__---___--__---__--___      ", "blue"),
  color(" __---__--__---___--__---___--_-_---___    ", "blue"),
  " ----------------------------------------------------------",
  " :: " + (new Date()).toString(),
  " ----------------------------------------------------------",
  'Example:',
  '  $ mkdir sails-output',
  '  $ cd sails-output',
  '  $ sails-inverse-model -u postgres -p root -d almacen -t pg -m -v -c',
  '',
  'User         : postgres',
  'Password     : root',
  'Database     : almacen',
  'Host         : localhost',
  'Models       : /home/julian/Documents/sails-output/models',
  'Views        : /home/julian/Documents/sails-output/views',
  'Controllers  : /home/julian/Documents/sails-output/controllers',
  'DB           : pg',
  'Schema (pg)  : public',
  '=====================================',
  'Views [OK]',
  '=====================================',
  'Models [OK]',
  '=====================================',
  'Controllers [OK]',
  '',
  '    Note: Copy models      => your/project_sails/api',
  '          Copy controllers => your/project_sails/api',
  '          Copy views/*     => your/project_sails/views/',
  ' Then: ',
  ' $ cd your/project_sails/',
  ' $ sails lift',
  '',
  ' More info: https://github.com/juliandavidmr/sails-inverse-model',
  " ---------------------------------------------------------------",
  'Options:',
  ' -u, --user        User of database',
  ' -p, --pass        Password of database',
  ' -d, --database    Database name',
  ' -h, --host        Host server               Default: localhost',
  ' -m, --models      Folder output models      Default: Folder actual',
  ' -c, --controllers Folder output controllers Default: Folder actual',
  ' -v, --views       Folder output views       Default: Folder actual ' + color('(Experimental)', 'yellow'),
  ' -t, --type        Type gestor database: mysql|postgres|mongodb  Default: mysql',
  ' -s, --schema      (Only PostgreSQL) Schema database postgres: Default: public',
  ' -f, --file        (Only MySQL) .sql file path entry' + color(' (Experimental)', 'yellow'),
  '\n',
  '====================== Individual generation ==================',
  'You can quickly generate a model, a controller, a view or these three at the sam' +
      'e time.',
  '# Generate model',
  '$ sails-inverse-model -g model --name Pet -a "name:string:r owner:string"',
  '\n',
  '# Generate Controller',
  '$ sails-inverse-model -g controller --name Pet -a "name:string:r owner:string"',
  '\n',
  '# Generate View',
  '$ sails-inverse-model -g view --name Pet -a "name:string:r owner:string"',
  '\n',
  '# Generate all (Model, View and Controller)',
  '$ sails-inverse-model -g all --name Pet -a "name:string:r owner:string"'
];
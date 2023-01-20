const { Sequelize } = require('sequelize');

const fs = require('fs');
const path = require('path');



const sequelize = new Sequelize('green-ux', 'postgres', '12345678', {
    host: 'localhost',
    dialect: 'postgres',
     logging:false,
     native:false
  });

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname,'./src/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, './src/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

  sequelize.authenticate()
  .then(() => {
    console.log('Conectado a la db de Postgres')
  })
  .catch(err => {
    console.log('No se conecto a la db')
  })

  module.exports = {
    ...sequelize.models, 
    conn: sequelize,
  };

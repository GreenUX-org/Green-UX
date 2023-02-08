const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const {DB_NAME,DB_USER,DB_PASSWORD,DB_HOST} = process.env

const sequelize = new Sequelize(`${DB_NAME}`, `${DB_USER}`, `${DB_PASSWORD}`, {
  host: `${DB_HOST}`,
  dialect: "postgres",
  logging: false,
  native: false,
});

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "./src/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "./src/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model)=> model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);



const {Info, Sections, Titles}= sequelize.models
// Aqui van a ir las relaciones...
Sections.hasMany(Titles,{foreignKey:'section_id',sourceKey:'id'});    
Titles.belongsTo(Sections,{foreignKey:'section_id',targetKey:'id'});
Titles.hasOne(Info,{foreignKey:'title_id'});
Info.belongsTo(Titles,{foreignKey:'title_id'});



// Prueba de que la conexion sequelize funciona..
sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado a la db de Postgres");
  })
  .catch((err) => {
    console.log("No se conecto a la db");
  });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};

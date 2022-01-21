const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: 'USER',
  },
});
const Basket = sequelize.define('basket', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});
const BasketSuperhero = sequelize.define('basket_superhero', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});
const Superhero = sequelize.define('superhero', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nickname: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    defaultValue: 6,
  },
  images: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Univers = sequelize.define('univers', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
});
const Planet = sequelize.define('planet', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

const Rating = sequelize.define('rating', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  rate: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

const SuperheroInfo = sequelize.define('superhero_info', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  real_name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  origin_description: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  superpowers: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  catch_phrase: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const UniversPlanet = sequelize.define('univers_planet', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasOne(Rating);
Rating.belongsTo(User);

Basket.hasMany(BasketSuperhero);
BasketSuperhero.belongsTo(Basket);

Univers.hasMany(Superhero);
Superhero.belongsTo(Univers);

Planet.hasMany(Superhero);
Superhero.belongsTo(Planet);

Superhero.hasMany(Rating);
Rating.belongsTo(Superhero);

Superhero.hasMany(BasketSuperhero);
BasketSuperhero.belongsTo(Superhero);

Superhero.hasMany(SuperheroInfo, { as: 'info' });
SuperheroInfo.belongsTo(Superhero);

Univers.belongsToMany(Planet, { through: UniversPlanet });
Planet.belongsToMany(Univers, { through: UniversPlanet });

module.exports = {
  User,
  SuperheroInfo,
  Superhero,
  Rating,
  Basket,
  BasketSuperhero,
  Planet,
  Univers,
  UniversPlanet,
};

/*==================================================
/database/models/Campus.js

It defines the campus model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance called "db"

// Define the campus model
const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "TEMP",
    allowNull : false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
    imageUrl: {
      type: Sequelize.STRING,
      defaultValue: 'https://cdn.prod.website-files.com/63dd388b87532047a1725f8f/6734e5a0cc1c56b124d6ecc3_campus-shot.jpg.webp',
      allowNull: true
    },
});

// Export the campus model
module.exports = Campus;
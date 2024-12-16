/*==================================================
/database/models/Student.js

It defines the student model for the database.
==================================================*/
const Sequelize = require('sequelize');  // Import Sequelize
const db = require('../db');  // Import Sequelize database instance clled "db"

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true 
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://cdn-icons-png.flaticon.com/512/847/847969.png',
    allowNull: true
  },
  gpa: {
    type: Sequelize.DECIMAL(3, 2), 
    allowNull: true, 
    validate: {
      min: 0.0, 
      max: 4.0
    }
  }
});

// Export the student model
module.exports = Student;
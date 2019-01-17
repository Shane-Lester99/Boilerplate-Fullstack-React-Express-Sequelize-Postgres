const db = require("./db");
const Sequelize = require('sequelize');

const Students = db.define('students', {
    firstName : {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName : {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        validate : {
            isEmail : true
        } 
    },
    imageUrl : {
        type: Sequelize.STRING,
        defaultValue: 'o'        
    },
    gpa : {
        type : Sequelize.FLOAT,
        validate : {
            min : 0,
            max : 4
        }
    }
});

module.exports = Students;

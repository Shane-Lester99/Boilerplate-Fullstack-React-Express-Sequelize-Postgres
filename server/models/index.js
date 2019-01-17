const Students = require('./students');
const Campuses = require('./campuses');



const db = require('./db');

Campuses.hasMany(Students);
Students.belongsTo(Campuses);

module.exports = {
    db,
    Students,
    Campuses
}

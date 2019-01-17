const express = require('express');
const app = express();
const { db } = require('./models');
const path = require('path');
app.use(express.static(path.join(__dirname, '..', 'client', 'public')));
app.use('/api', require('./api'));

db.sync({force: true}).then( () => console.log("tables created!")); 

app.listen(3000, () => {
    console.log('App is listening on port 3000'); 
});

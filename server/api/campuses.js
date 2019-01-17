const router = require('express').Router();
const { Campuses } = require('../models');
router.get('/', async (req, res, next) => {
    try {
        var campuses = await Campuses.findAll()
        .then ((rows) => {
            console.log(rows);
            res.status(200).send(rows);
        })
        .catch( (err) => {
            res.status(500).send("nn");
        })
    } 
    catch(err) {
        console.log('oh no!');
        res.status(500).send(err);
    }
});

router.post('/', async (req, res, next) => {
    let { name, imageUrl, address, description } = req.query;
    //console.log(firstName, lastName, email, imageUrl, gpa);
    try {   
        await Campuses.create({
            name,
            imageUrl,
            address,
            description
        })
        .then( () => {
            res.status(200).send("Success");
         })
        .catch( (err) => {
            res.status(500).send("Server error");
         });
    }
    catch(err) {
        res.status(500).send(err);
    }
});

module.exports = router;

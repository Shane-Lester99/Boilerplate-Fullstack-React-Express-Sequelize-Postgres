const router = require('express').Router();
const { Students } = require('../models');
router.get('/', async (req, res, next) => {
    try {
        var students = await Students.findAll()
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
    let { firstName, lastName, email, imageUrl, gpa } = req.query;
    //console.log(firstName, lastName, email, imageUrl, gpa);
    try {   
        await Students.create({
            firstName,
            lastName,
            email,
            imageUrl,
            gpa
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

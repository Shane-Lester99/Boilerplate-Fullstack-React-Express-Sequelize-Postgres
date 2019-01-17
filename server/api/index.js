const router = require('express').Router();
module.exports = router;
router.use('/students', require('./students.js'));
router.use('/campuses', require('./campuses.js'));

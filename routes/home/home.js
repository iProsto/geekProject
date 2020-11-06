let router = require('express').Router();
let home = require('../../controllers/home/home');


router.get('/', home.getHomePage);

module.exports = router;
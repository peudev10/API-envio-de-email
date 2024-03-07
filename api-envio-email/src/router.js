const express = require('express');
const router = express.Router();

const controllers = require('./controllers/controllers');
const middleware = require('./middleware/middleware');

router.post('/enviarEmail', middleware.validateEmail, middleware.validateToEmail ,controllers.enviarEmail);

module.exports = router;
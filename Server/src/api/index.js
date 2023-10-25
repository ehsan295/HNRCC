const express = require('express');
const signupAPI  = require('./signup')
const signinAPI = require('./signin')
const projectsAPI = require('./projects')
const router = express.Router();

router.use(signupAPI)
router.use(signinAPI)
router.use(projectsAPI)


module.exports = router;

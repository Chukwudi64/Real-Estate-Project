const {register} = require('../controller/register');

const {login} = require('../controller/signin')

const express = require('express')

const {Addproperty} = require('../controller/Addproperty')

const router = express.Router();

const {Deleteproperty} = require('../controller/Deleteproperty')

const {Property} = require('../controller/Property')

const { requiresignin } = require('../middleware/middleware')




router.post('/register', register)
router.post('/signin', login)
router.post('/Addproperty', requiresignin, Addproperty)
router.post('/Deleteproperty', requiresignin, Deleteproperty)
router.get('/Property', requiresignin, Property)

module.exports = router;

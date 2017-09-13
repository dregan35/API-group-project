'use strict';

const { Router } = require('express');
const router = Router();
const { getCustomers, getOneCustomer } = require('../Controllers/CustomersCtrl');

router.get('/Customers', getCustomers);
router.get('/Customers/:id', getOneCustomer);
//router.post...
//router.put...

module.exports = router;
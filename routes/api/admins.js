const express = require('express');
const router = express.Router();

// admin model
const Admin = require('../../models/admin');

// @route GET api/admins
// @description Get all admins
// @access public for now, need to add authentication ***
router.get('/', (req, res) => {
    Admin.find()
    .sort({lastName : 1})
    .then(admins => res.json(admins))
});

module.exports = router;
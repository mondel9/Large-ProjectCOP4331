const express = require('express');
const router = express.Router();


// admin model
const Admin = require('../../models/admin');

// @route GET api/admins
// @description Get all admins
// @access public for now, need to add authentication ***
router.get('/', (req, res) => {
    Admin.find()
    .then(admins => res.json(admins))
});

// @route POST api/admins
// @description Create new administrator
// @access public for now, need to add authentication, password requirements ***
// @will setup to encrypt passwords
router.post('/', (req, res) => {
    const newAdmin = new Admin({
        username: req.body.username,
        password: req.body.password, 
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });
    
    newAdmin.save().then(admin => res.json(admin));
});


// @route DELETE api/admins/:id
// @description Delete an admin
// @access public for now, need to add authentication ***
router.delete('/:id', (req, res) => {
    Admin.findById(req.params.id)
        .then(admins => admins.remove()
        .then(() => res.json({ success: true }))
        .catch(err => res.status(404).json({ success: false })));
});






module.exports = router;
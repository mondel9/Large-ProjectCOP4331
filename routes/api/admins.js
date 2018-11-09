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
	var lowerCase = /[a-z]/g;
	var upperCase = /[A-Z]/g;
	var numbers = /[0-9]/g;
	var pass = req.body.password;
	var valid = true;
	var badPass = "Cannot create account: Password needs";
	
	if(lowerCase.test(pass) === false){
		console.log(1);
		valid = false;
		badPass = badPass + " lowercase characters,";
	}
	if(upperCase.test(pass) === false){
		console.log(2);
		valid = false;
		badPass = badPass + " uppercase characters,";
	}
	if(numbers.test(pass) === false){
		console.log(3);
		valid = false;
		badPass = badPass + " numbers,";
	}
	if(pass.length < 8) {
		valid = false;
		badPass = badPass + " not long enough (8 characters Minimum)";
	}

	console.log(valid);
	if(valid === true){
    const newAdmin = new Admin({
        username: req.body.username,
        password: req.body.password, 
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });
    newAdmin.save().then(admin => res.json(admin));
	}
	else{
	res.json(badPass);
	}
	valid = true;
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
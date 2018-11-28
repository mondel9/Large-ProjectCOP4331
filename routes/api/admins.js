const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');


// admin model
const Admin = require('../../models/admin');

//salt
BCRYPT_SALT_ROUNDS = 12;

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
		//console.log(1);
		valid = false;
		badPass = badPass + " lowercase characters,";
	}
	if(upperCase.test(pass) === false){
		//console.log(2);
		valid = false;
		badPass = badPass + " uppercase characters,";
	}
	if(numbers.test(pass) === false){
		//console.log(3);
		valid = false;
		badPass = badPass + " numbers,";
	}
	if(pass.length < 8) {
		valid = false;
		badPass = badPass + " not long enough (8 characters Minimum)";
	}

	//console.log(valid);
	if(valid === true){
	bcrypt.hash(req.body.password, BCRYPT_SALT_ROUNDS, function(err, hash) {
    // Store hash in your password DB.
	//console.log(hash);
    const newAdmin = new Admin({
        username: req.body.username,
        password: hash, 
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });
    newAdmin.save(function(err) {
    if (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        // Duplicate username
        return res.status(500).send({ succes: false, message: 'User already exist!' });
      }

      // Some other error
      return res.status(500).send(err);
    }
	res.json(newAdmin);
	}
	);//.then(admin => res.json(admin));
	});//end of hash function
	}//end of if
	else{
	res.json(badPass);
	}
	valid = true;
});

router.post('/login', function (req, res){ 
  var username = req.body.username;
  var password = req.body.password;

  //Admin.getUser(username)
  Admin.findOne({username: username})
    .then(function(user) {
		//console.log(password);
		//console.log(user.password);
        return bcrypt.compare(password, user.password);
    })
    .then(function(samePassword) {
		//console.log(samePassword);
        if(samePassword === false) {
            res.status(403).send();
        }
        res.send();
    })
    .catch(function(error){
        console.log("Error authenticating user: ");
        console.log(error);
    });
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
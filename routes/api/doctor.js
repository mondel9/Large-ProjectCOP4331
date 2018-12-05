const express = require('express')
const router = express.Router();
const bcrypt = require('bcryptjs');


// doctor model
const Doctor = require('../../models/doctor')

// @route GET api/doctor
// @desc get doctor
// @access currently public
router.get('/', (req, res) => {
    Doctor.find()
     .sort({lastName : 1})
     .then(doctor => res.json(doctor))
});

// @route POST api/doctor
// @desc create a post
// @access currently public
/*router.post('/', (req, res) => {
    const newDoctor = new Doctor({
        userId: req.body.userId,
        username: req.body.username,
        password: req.body.password, 
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        doctorId: req.body.doctorId,
    });

    newDoctor.save().then(doctor => res.json(doctor));
});*/

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
	
	if(valid === true){
	bcrypt.hash(req.body.password, BCRYPT_SALT_ROUNDS, function(err, hash) {
    // Store hash in your password DB.
	//console.log(hash);
    const newDoctor = new Doctor({
        userId: req.body.userId,
        username: req.body.username,
        password: hash, 
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        doctorId: req.body.doctorId,
    });
    newDoctor.save(function(err) {
    if (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        // Duplicate username
        return res.status(500).send({ success: false, message: 'User already exist!' });
      }

      // Some other error
      return res.status(500).send(err);
    }
	res.json(newDoctor);
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

  Doctor.findOne({username: username})
    .then(function(user) {
        return bcrypt.compare(password, user.password);
    })
    .then(function(samePassword) {
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


// @route DELETE api/doctor/:id
// @desc delete a doctor to the void
// @access currently public
router
    .delete('/:id', (req, res) => {
        Doctor.findById(req.params.id)
         .then(doctor => doctor.remove().then(() => res.json({ success: true })))
         .catch(err => res.status(404).json({success: false}));
    });
    
// @route PUT api/doctor/:id
// @description Update a doctor's info
// @access 
router.put('/:id', (req, res) => {
    Doctor.findByIdAndUpdate(req.params.id, 
        { userId: req.body.userId,
          username: req.body.username,
          password: req.body.password, 
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          doctorId: req.body.doctorId,
        }, {new : true})
    .then(doctor => res.json(doctor))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
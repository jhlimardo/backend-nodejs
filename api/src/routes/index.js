const express = require('express');

const { 
    getUsers,
    addUser,
    loginUser
 } = require ('../controllers/users.js');

 const {
    getPeople
 } = require ('../controllers/starwars.js')

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUsers);
router.post('/users', addUser);
router.post('/userlogin', loginUser);
router.get('/starwars/', getPeople);

module.exports = router;
const express = require('express');
const { getAllUser, getUser } = require('../controllers/utilisateur');

const router = express.Router();

router.route('/user').get(getAllUser);
router.route('/user/:id').get(getUser);

module.exports = router;
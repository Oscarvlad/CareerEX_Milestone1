// routes/wallet.js
const express = require('express');
const router = express.Router();
const walletController = require('../controllers/walletController');
const auth = require('../middlewares/auth');

router.use(auth);

router.get('/', walletController.getWallet);
// Add other wallet routes as needed

module.exports = router;
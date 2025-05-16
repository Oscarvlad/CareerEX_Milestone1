const mongoose = require("mongoose");

// Define the Wallet schema
const walletSchema = new mongoose.Schema({
    balance: {
        type: Number,
        default: 0, // Initial balance is 0
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

// Create and export the Wallet model
module.exports = mongoose.model("Wallet", walletSchema);
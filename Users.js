const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    // Account Information
    Email: {
        type: String,
        required: true
    },
    Phone: {
        type: String,
        required: true
    },

    // Game Related Status
    PvpCurrRank:{
        type: Number,
        default: 0
    },
    PvpHighestRank:{
        type: Number,
        default: 0
    },
    PveLevel:{
        type: Number,
        default: 0
    },
    Crystal:{
        type: Number,
        default:0
    },
    Point:{
        type: Number,
        default:0
    },
    NumBoxes:{
        type: Number,
        default:0
    },
    Wallet:{
        type: Number,
        default:0
    },

    //Inventory (Skin, Weapon, Character)
    Materials:{
        Stuff: [String]
    },
    
    Weapon:[{
        //Key in characterSchema
        key: {type: String}
    }],

    Character:[{
        //Key in characterSchema
        key: {type: String}
    }]
})

module.exports = mongoose.model('User', userSchema);
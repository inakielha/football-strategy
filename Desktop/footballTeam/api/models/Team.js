const { Schema, model } = require("mongoose");

const teamSchema = new Schema({
    teamName: {
        type: String,
        unique: true,
        required: true
    },
    amountOfPlayers: {
        type: String,
        enum: ["5", "11"],
        default: "11"
    },
    description: {
        type: String,
        minLength: 10,
        maxLength: 100
    },
    formation: {
        type: String,
    },
    players: {
        type: [Object]
    },
    shirt: {
        type: String,
    }
})

module.exports = model("team", teamSchema);
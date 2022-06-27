const {Schema,model} = require ("mongoose");

const playerSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    position:{
        type:String,
        require:true
    }
})

module.exports = model("player",playerSchema);
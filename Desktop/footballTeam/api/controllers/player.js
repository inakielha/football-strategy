const mongoose = require("mongoose");
const { findByIdAndUpdate } = require("../models/Team");
const Player = require("./../models/Players");

const createPlayer = async (req,res) => {
    const {name} = req.body;
    try {
        const newPlayer = new Player({name})
        await newPlayer.save();
        return res.status(201).json({
            ok: true,
            Player: {
            name:name
            }
        })
    } catch (e) {
        console.log(e)
        res.json({
            ok: false,
            msg: e
        })
    }
}
const deletePlayer = async (req,res) => {
    const {name} = req.body;
    try {
        const playerDelete = await Player.deleteOne({name})
        if(playerDelete.deletedCount > 0) return res.status(200).json({msg:"Player delete succesfully",ok: true})
        return res.status(404).json("There is nothing to delete")
    
    } catch (error) {
        console.log(error)
        return res.status(404).json("Delete error", error)
    }
}
const updatePlayer = async (req,res) => {
    const {name, playerId} = req.body;
    try {
        const playerUpdate = await Player.findByIdAndUpdate(playerId,{name})
        return res.status(200).json({
            ok:true,
            player: playerUpdate.name
        })
    }catch (e){
        console.log(e)
        return res.status(404).json({ok:false,msg:e})
    }
}

module.exports = {
    createPlayer,
    deletePlayer,
    updatePlayer
}
const mongoose = require("mongoose");
const Team = require("./../models/Team")

const createTeam = async (req,res) =>{
    const { teamNames, formation,shirt, one,two,three,four, five, six, seven, eight, nine, ten, eleven} = req.body;
    try {
        let teamName = teamNames.toLowerCase()
         one.name = one.name.toLowerCase()
         two.name = two.name.toLowerCase()
         three.name = three.name.toLowerCase()
         four.name = four.name.toLowerCase()
         five.name = five.name.toLowerCase()
         six.name = six.name.toLowerCase()
         seven.name = seven.name.toLowerCase()
         eight.name = eight.name.toLowerCase()
         nine.name = nine.name.toLowerCase()
         ten.name = ten.name.toLowerCase()
         eleven.name = eleven.name.toLowerCase()
         players = [one,two,three,four,five,six,seven,eight,nine,ten,eleven]
        const newTeam = new Team({teamName,shirt, players,formation})
        await newTeam.save();
        res.status(201).json({
            ok: true,
            Team: {
                teamName: teamName,
                players: players,
                description: description,
                shirt,
                formation
            }
        })
    } catch(e){
        console.log(e)
        res.json({
            ok: false,
            msg: e
        })
    }
}
const deleteTeam = async (req,res) =>{
    const{name} = req.body;
    try {
        const deleteTeam = await Team.deleteOne({name:name})
        if (deleteTeam.deletedCount > 0){
            console.log(deleteTeam)
            res.status(200).json("Delete succesfull")
        }else {
            res.status(404).json("There is nothing to delete")
        }
    } catch(e) {
        console.log(e)
        res.status(404).json("Delete error",e)
    }
}
const updateTeam = async (req,res) => {
    const {name, players, description, userId} = req.body;
    try {
        const updateTeam = await Team.findByIdAndUpdate(userId,{name,players,description})
        res.status(201).json({
            ok: true,
            team: {
                name: updateTeam.name,
                players: updateTeam.players,
                description: updateTeam.description
            }
        })
    }catch (e) {
        console.log(e)
        res.status(404).json("We couldnt update your user")
    }
}

const getTeams = async (req,res) => {
    try {
        const allTeams = await Team.find({})
        res.status(200).json({ok: true,allTeams})
    } catch (e){
        console.log(e)
        res.status(400).json("error flaco")
    }
}
const searchTeam = async (req,res)=> {
    const {teamName} = req.query;
    try{
        let teamNameLowercase = teamName.toLowerCase()
        const allTeam = await Team.find({})
       const result = allTeam.filter(equipo=> !equipo.teamName.indexOf(teamNameLowercase)
        )
        res.status(200).json({ok:true,allTeams:result})

    } catch (e){
        console.log(e)
        res.status(400).json(e)
    }
}



module.exports = {
    createTeam,
    deleteTeam,
    updateTeam,
    getTeams,
    searchTeam
}
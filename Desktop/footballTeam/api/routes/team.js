const {Router} = require ("express");
const {check} = require ("express-validator");
const {createTeam, deleteTeam, updateTeam, getTeams} = require("./../controllers/team")
const Team = require("./../models/Team");

const router = Router();

router.get(
    "/",
    getTeams
    )

router.post(
    "/",
    [
    check("name","The team name is required").not().isEmpty(),
    // check("name").custom(value=>{
    //     return Team.find
    // })
],
createTeam
);

router.delete(
    "/",
    [
    check("name","The team name is required").not().isEmpty(),  
    ],
    deleteTeam
)
router.put(
    "/",
    [   
    check("name","The team name is required").not().isEmpty(),
    ],
    updateTeam

)

module.exports = router;
const {Router} = require ("express");
const {check} = require ("express-validator");
const {createPlayer,deletePlayer,updatePlayer} = require ("./../controllers/player")

const router = Router();

router.post(
    "/",
    createPlayer
)
router.delete(
    "/",
    deletePlayer
)
router.put(
    "/",
    updatePlayer
)

module.exports = router;
const { Router } = require("express");
const router = Router();

const { protect } = require("../../middleware/protect.js");
const {
  createTeam,
  getTeamById,
  editTeam,
  deleteTeam,
} = require("../../controllers/controllerRooms");

router.post("/", protect, createTeam);
router.get("/:id", protect, getTeamById);
router.put("/:id/edit", protect, editTeam);
router.delete("/deleteRoom", protect, deleteTeam);

module.exports = router;

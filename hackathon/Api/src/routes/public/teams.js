const { Router } = require("express");
const router = Router();

const {
  getRoomById,
  getRooms,
} = require("../../controllers/controllerTeams.js");

router.get("/", getRooms);

module.exports = router;

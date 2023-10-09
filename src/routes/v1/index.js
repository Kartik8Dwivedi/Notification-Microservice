const express = require("express");
const TicketController = require("../../controllers/ticket-controllers");

const router = express.Router();

router.post('/tickets', TicketController.create);

module.exports = router;

const express = require("express");
const { WritersController } = require("../controllers/WritersController");
const WritersRoutes = express.Router();

WritersRoutes.get("/", WritersController.getAll);
WritersRoutes.get("/:id", WritersController.getById);
WritersRoutes.post("/", WritersController.add);
WritersRoutes.delete("/:id", WritersController.delete);

module.exports = {
    WritersRoutes,
};
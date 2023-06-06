const express = require("express");
const { BooksController } = require("../controllers/BooksController");
const BooksRoutes = express.Router();

BooksRoutes.get("/", BooksController.getAll);
BooksRoutes.get("/:id", BooksController.getById);
BooksRoutes.post("/", BooksController.add);
BooksRoutes.delete("/:id", BooksController.deleteById);

module.exports = {
    BooksRoutes,
};
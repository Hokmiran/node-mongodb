const { Books } = require("../models/Books");
const { v4: uuidv4 } = require('uuid');
var fs = require('fs');


const BooksController = {
    getAll: (req, res) => {
        Books.find()
            .limit(10)
            .populate({
                path: "writer",
                populate: { path: "country" }
            })
            .then((data) => {
                res.json(data);
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    },
    getById: (req, res) => {
        const id = req.params.id;
        Books.findById(id)
            .populate("writer")
            .then((data) => {
                if (data) {
                    res.json(data);
                } else {
                    res.status(404).json({ msg: "Not found!" });
                }
            })
            .catch((err) => {
                res.status(500).json(err);
            });
    },

    add: async (req, res) => {

        try {
            let file = req.files.image;
            let fileExt = file.name.substring(file.name.lastIndexOf('.'))
            let path = process.cwd() + "/public/images/" + uuidv4() + fileExt    
            console.log(path);        
            file.mv(path, function (err) {

            })
            const newBook = {
                name: req.body.name,
                description: req.body.description,
                image: path,
                writer: req.body.writer
            }
            const data = await Books.create(newBook);
            res.status(201).json({
                status: "success",
                data
            })

        } catch (error) {
            res.status(400).json({
                status: "fail",
                error
            })

        }

    },

    deleteById: async (req, res) => {
        try {
            const data = await Books.findByIdAndDelete(req.params.id);
            fs.unlink(data.image, function (err) {
                if (err) {
                    console.log(err)
                }
            })

            res.status(201).json({
                status: "success",
                data
            })

        } catch (error) {
            res.status(400).json({
                status: "fail",
                error
            })

        }

    },
};

module.exports = {
    BooksController,
};
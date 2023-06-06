const { default: mongoose } = require("mongoose");


const bookSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    publishDate: { type: Date, default: Date.now },
    writer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Writers"
    },
    addDate: { type: Date, default: Date.now },
});

const Books = mongoose.model("Books", bookSchema);

module.exports = {
    Books,
};
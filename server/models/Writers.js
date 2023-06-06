const { default: mongoose } = require("mongoose");

const writerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    birthDate: { type: Date, default: Date.now },
    country: { type: mongoose.Schema.Types.ObjectId, ref: "Country" },
    addDate: { type: Date, default: Date.now },
});

const Writers = mongoose.model("Writers", writerSchema);

module.exports = {
    Writers,
};
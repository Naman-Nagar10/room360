const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listiningSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: "https://www.reddit.com/r/JEENEETards/comments/1ei4eog/duality_of_indian_college_hostels/",
        set: (image) => {
            return image===" "? "https://www.reddit.com/r/JEENEETards/comments/1ei4eog/duality_of_indian_college_hostels/" : image
        }
    },
    price: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    type: String,
    sharing: String,
    gender: String,
});

const Listing = mongoose.model("Listing", listiningSchema);
module.exports = Listing;


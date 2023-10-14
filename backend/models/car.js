const mongoose = require("mongoose");
const CarSchema = new mongoose.Schema(
    {
        marca: {
            type: String,
            required: true
        },
        modelo: {
            type: String,
            required: true
        },
        cor: {
            type: String,
            required: true
        },
        chassi: {
            type: String,
            unique: true,
            required: true
        },
        preco: {
            type: Number,
            required: true
        },
        ano: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Car", CarSchema);
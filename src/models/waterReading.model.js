import mongoose, { Schema } from "mongoose";

const waterReadingSchema = new Schema({
    treatedWaterReading: {
        type: Number,
        required: true,
        trim: true,
    },

    wastedWaterReading: {
        type: Number,
        required: true,
        trim: true,
    },

    waterReadingCreator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true,
    },
}, {timestamps: true});

export const WaterReading = mongoose.model("WaterReading", waterReadingSchema);
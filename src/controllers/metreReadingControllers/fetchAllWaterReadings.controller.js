import { apiResponse, asyncHandler, WaterReading } from "../allImports.js";

const fetchAllWaterReadings = asyncHandler(async (request, response) => {
    const waterReadings = await WaterReading.find({}).sort({createdAt: -1});

    return response.status(200)
    .json(
        new apiResponse(200, waterReadings, "Water readings fetched successfully")
    )
});

export {fetchAllWaterReadings}
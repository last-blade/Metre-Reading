import { apiError, apiResponse, asyncHandler, WaterReading } from "../allImports.js";

const createWaterReadings = asyncHandler(async (request, response) => {
    const {treatedWaterReading, wastedWaterReading} = request.body;

    if(!treatedWaterReading){
        throw new apiError(400, "Treated water reading required")
    }

    if(!wastedWaterReading){
        throw new apiError(400, "Wasted water reading required")
    }

    if(isNaN(treatedWaterReading)){
        throw new apiError(400, "Treated water reading not a number")
    }

    if(isNaN(wastedWaterReading)){
        throw new apiError(400, "Treated water reading not a number")
    }

    const cretedWaterReading = await WaterReading.create({
        treatedWaterReading,
        wastedWaterReading,
        waterReadingCreator: request.user.id,
    });

    return response.status(201)
    .json(
        new apiResponse(201, {waterReading: cretedWaterReading}, "Water readings saved successfully")
    )

});

export {createWaterReadings}
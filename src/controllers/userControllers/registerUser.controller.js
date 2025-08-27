import { apiError, apiResponse, asyncHandler, User } from "../allImports.js";

const registerUser = asyncHandler(async (request, response) => {
    const  {fullname, email, password} = request.body;

    if([fullname, email, password].some(input => input === undefined || input.trim() === "")){
        throw new apiError(400, "All fields are required")
    }

    await User.create({
        fullname, 
        email,
        password,
    });

    return response.status(201)
    .json(
        new apiResponse(201, {}, "User registered successfully")
    )

});

export {registerUser}
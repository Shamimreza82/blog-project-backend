
import { StatusCodes } from "http-status-codes";
import catchAsync from "../../../utils/catchAsync"
import { UserValidation } from "../user/user.validation"




const register = catchAsync(async (req, res) => {
    const validationUser = UserValidation.userValidationSchema.parse(req.body)
    console.log(validationUser);
    console.log(req.body);


    res.json({
        success: true, 
        message: "User Register Successfully",
        statusCode: StatusCodes.CREATED, 
        data: req.body || {}
    })
})


export const AuthController = {
    register
}
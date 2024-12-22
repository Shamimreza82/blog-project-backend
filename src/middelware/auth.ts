import jwt, { JwtPayload } from "jsonwebtoken";
import catchAsync from "../utils/catchAsync"
import { envFile } from "../config";
import { User } from "../app/module/user/user.model";

const auth = (...requiredRole: string[]) => {
    return catchAsync (async (req, res, next) => {
        const token = req.headers.authorization?.split(' ')[1]
     console.log(token);
        if(!token){
            throw new Error("you are unauthorize user")
        }
        const decode = await jwt.verify(token, envFile.jwt_access_secret as string) as JwtPayload
        const {email, role} = decode; 
        const user = await User.findOne({email})
        if(!user){
            throw new Error("you are unauthorize user")
        }

        if(!requiredRole.includes(role)){
            throw new Error("you are unauthorize user")
        }

        req.user = decode 
        next()
    })
}

export default auth
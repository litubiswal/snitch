import {body,validationResult} from "express-validator";

export const registerValidator = [
    body('email')
        .exists().withMeassage("Email is required")
        .trim()
        .isEmail().withMeassage("Email is not valid"),
    body("name")
        .exists().withMeassage("Name is required")
        .isString().withMeassage("Name must be a string")
        .trim()
        .isLength({min:3,max:30}).withMeassage("Name must be between 3 and 30 characters"),
    body("password")
        .exists().withMeassage("Password is required")
        .isString().withMeassage("Password must be a string")
        .trim()
        .isLength({min:6,max:30}).withMeassage("Password must be between 6 and 30 characters"),
    (res,req,next)=>{
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(400).json({
                message:"invalid Request",
                errors:errors.array()
            })
        }

        next();
    }
]

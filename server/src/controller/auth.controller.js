import userModel from "../models/user.model.js";

/**
 * @description Register an user and save the data from req.body
* @param req express.Request
* @param req.body Object
* @param req.body.email String
* @param req.body.name String
* @param req.body.password String
 */

async function register(res,req){
    const{email,name,password} = req.body;

    const isUserAlreadyExist = await userMModel.findOne({email});

    if(isUserAlreadyExist){
        return res.status(400).json({
            message:"User already exists",
            errors:[{
                message:"User already exists",
                field:"email",
            }]
        })
    } 
}
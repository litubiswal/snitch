import {Router} from "express";
import {registerValidator} from "../validtaors/auth.validator.js"

const router = Router();

/**
 * @POST /api/auth/register
 * @param req Express req
 * @param req.body = { email,name,password }
 * @response res.status = 201 (if successful)
 */

router.post("/register",registerValidator)

export default Router;

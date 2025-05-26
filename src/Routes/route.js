import express from "express";
import {Controller} from "../Controller/controller.js";
import asyncHandler from "../Utils/asyncHandler.js";

const router = express.Router();

router.route('/ClientRegister').post(asyncHandler(Controller.EmailAndIdea));
router.route('/EmailSub').post(asyncHandler(Controller.EmailSub));

export {router};
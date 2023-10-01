import { Request, Response } from "express";

const { validationResult } = require("express-validator");

export const validFields = (request: Request, res: Response, next: any) => {
    const errors = validationResult(request);
    
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    next();
}
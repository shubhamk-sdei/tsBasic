import { Router, Request, Response, NextFunction } from "express";
import {UserServices} from "../services";
const router = Router();

router.get("/user-data", (req: Request, res: Response, next: NextFunction)=>{
    UserServices.getOneUser().then(serviceData=>{
        res.status(serviceData.status).json(serviceData.data)
    }).catch(err=>{
        res.status(err.status||500).json(err.error);
    })
})

export default router;
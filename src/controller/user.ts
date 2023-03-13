import express,{Request, Response} from 'express'

export const getDAta = (req: Request, res: Response)=>{
    res.status(200).json("successful")
}

export const createData = (req: Request, res: Response)=>{
    console.log(req.body);
    
}
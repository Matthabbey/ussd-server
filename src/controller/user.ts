import express,{Request, response, Response} from 'express'

// export const getDAta = (req: Request, res: Response)=>{
//     res.status(200).json("successful")
// }

export const createData = (req: Request, res: Response)=>{
    const { phoneNumber, text, sessionId } = req.body
    // console.log(phoneNumber);
    
    let response = ""
    if(text === ''){
        response = `CON\n enter your Name here`
    }





    setTimeout(()=>{
        console.log(response, "2");
        res.send(response)
        res.end()
    }, 2000)
    
    // res.set("Content-Type: text/plain");
    // res.send(response);
    
}
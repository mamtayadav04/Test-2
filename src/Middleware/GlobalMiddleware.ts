import { validationResult } from "express-validator";

export class GobalMiddleware{
      
       static async checkError(req:any,res:any,next:any){
           const error = validationResult(req)
           if(!error.isEmpty()){
                next(new Error(error.array()[0].msg))
                return;
           }  else {
               next();
           }  
       }
}
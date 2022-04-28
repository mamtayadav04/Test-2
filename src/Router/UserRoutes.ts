import { Router } from "express";
import { UserController } from "../Controller/UserController";
import { GobalMiddleware } from "../Middleware/GlobalMiddleware";
import { UserValidator } from "../Validator/UserValidator";
export class UserRoutes{
    public router: Router;

    constructor(){
        this.router = Router()
        this.getRoutes()
        this.postRoutes()
        this.putRoutes()
        this.patchRoutes()
        this.deleteRoutes()
    }
    
    getRoutes(){
        this.router.get('/getStudents',UserController.getStudents);
    }

    postRoutes(){
       this.router.post('/addStudent',UserController.addStudent)
       this.router.post('/findStudent',UserController.findStudent)
       this.router.post('/searchSort',UserController.searchSort)
      
    }

    putRoutes(){
        this.router.put('/updateStudent',UserController.updateStudent)
    }

    patchRoutes(){

    }

    deleteRoutes(){
        this.router.delete('/deleteStudent',UserController.deleteStudent)
    }
    
}
export default new UserRoutes().router
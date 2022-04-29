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
        this.router.get('/paginate',UserController.paginate);
    }

    postRoutes(){
       this.router.post('/enrolledStudent',UserController.enrolledStudent)
       this.router.post('/findStudent',UserController.findStudent)
       this.router.post('/searchSort',UserController.searchSort)
       this.router.post('/filterStudent',UserController.filterStudent)
      
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
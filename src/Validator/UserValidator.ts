import { body , validationResult} from 'express-validator'

export class UserValidator{
     
     static student(){
        return [
            body('firstName','Please provide firstName').isString().isLength({min : 2}),
            body('fathername','Please provide fathername').isString().isLength({min : 2}),
            body('mothername','Please provide mothername').isString().isLength({min : 2}),
            body('class','Please provide class').isString(),
            body('age','Please provide age').isInt().withMessage('Integers Only'),
            body('lastName','Please select lastName').isString().isLength({min : 2}),
            body('rollNo','Please provied rollNo').isInt().withMessage('Integers Only')
        ]
     }
}
import mongoose from "mongoose";
import { model } from "mongoose"

const StudentSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    rollNo: { type: String, required: true },
    class:{type:String},
    age: { type: String, required: true },
    section: { type: String, required: true },
    
    subjects: { type: String },
    address: [{
        _id : false ,
        street: { type: String },
        city: { type: String},
        state: { type: String},
        
    }],   
    personalInfo:[{
        _id : false,
        fatherName : {type: String},
        phoneNumber : {type : Number},
        familyName : {type: String}
     }],
    createdAt: { type: String, default: new Date() },
    updatedAt: { type: String, default: new Date() }

})
export default model("students", StudentSchema)
import Student from "../Models/StudentModel";

export class UserController {

    static async addStudent(req: any, res: any, next: any) {
        try {
            console.log("Add", req.body)
            const data = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                rollNo: req.body.rollNo,
                age: req.body.age,
                class:req.body.class,
                section: req.body.section,
                subjects: req.body.subjects,
                address: [{
                    street: req.body.street,
                    city: req.body.city,
                    state: req.body.state,
                }],
                personalInfo: [{
                    fatherName: req.body.fatherName,
                    phoneNumber: req.body.phoneNumber,
                    familyName: req.body.familyName
                }],
                createdAt: new Date(),
                updatedAt: new Date(),
            }
            const student = await new Student(data).save()
            return res.status(200).json({ msg: " Student Enrolled Successfully", student })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ msg: 'Student Not Added', error })
        }
    }

    static async getStudents(req: any, res: any, next: any) {
        try {
            const student = await Student.find()
            return res.status(200).json({ msg: 'List Of Students', student })
        } catch (error) {
            return res.status(200).json({ msg: 'Something is missing', error })
        }
    }


     static async updateStudent(req: any, res: any) {
        // { body: { firstName: any; _id: any; lastName: any; phoneNumber: any }; }
        // { send: (arg0: any) => void; json: (arg0: { status: boolean; e: any; }) => any; }
        try {
            console.log("update", req.body)
            const data:any = {
                // _id: req.body._id,
                
            }
            if(req.body.firstName){
                data["firstName"] = req.body.firstName
                data.firstName = req.body.firstName
            }

            // lastName:req.body.lastName,
            // phoneNumber: req.body.phoneNumber,
            // updated_at: new Date()
            const students = await Student.findOneAndUpdate({ _id: req.body._id }, data);
            
            res.send(students);
        } catch (e) {
            return res.json({ status: true, e })
        }
    }





    static async deleteStudent(req: any, res: any, next: any) {
        try {
            const student = await Student.deleteOne({
                _id: req.body._id
            })
            return res.json({ msg: 'Deleted Student', student })
        } catch (error) {
            return res.json({ msg: "Student Not Deleted" })
        }
    }
    
   
    static async findStudent(req: any, res: any, next: any) {
        try {
            const data = [{

                _id: req.body._id 
                 
            }]
            const student = await Student.find({
                _id: req.body._id ,data });
            return res.json({ msg: 'Find Student Successfully', student })
        } catch (error) {
            
        }
    }


    static async searchSort(req: any, res: any, next: any) {
        try {
            const search = req.query.search
            const student = await Student.find({
                firstName: { $regex: search}
            }).sort({ class: 1 })
            return res.json({ msg: "Name Found", student })
        } catch (error) {
         return res.json({ msg: 'Not Found', error })
        }
    }

//     static async pagination(req: any, res: any, next: any){
//        try{
        
//         const resultsPerPage = 5,
//         let page = req.params.page,
//         const search = req.query.search,
//         page = page - 1,

//        const student = await Student.find({page:req.params.page,page:req.query.page});
//                     .select("name")
//                    .sort({ name: "asc" })
//                    .limit(resultsPerPage)
//                    .skip(resultsPerPage * page)
//                    .then((results) => {
//                   return res.status(200).send(results);


//     return res.json({ msg: 'Find Student Successfully', student })
// } catch (error) {
    
// }
// }

    




    // static async Sort(req: any, res: any, next: any){
    // const Name = [];
    
    // console.log(Name.sort({firstName: -1, lastName:-1 ,createdAt:-1, updatedAt:-1 }));


    // static async filterStudent(req: any, res: any, next: any) {
    //     const data = [
    //         { name: 'A', age: 12, section:'',rollNumber: '', fatherName: ''  }];
    //          const student = data.filter({
    //         _id: req.body._id, data
    //     });
    //     return res.json({ msg: 'Find Student Successfully', student })
    // } catch (error) {
        
    // }

//    const prices = [200,233,316,340,390,440];
//     const result = prices.filter(checkPrices);
//     function checkPrices(prices) {
//     return prices < 440;
//     }
//     console.log(result);

// static async paginate(req,res){
//         
//         let page = req.params.page  ; 
//         const search = req.query.search;
    
//         page = page - 1
    
//         usermodels.find({page:req.params.page,page:req.query.page})
//             .select("name")
//             .sort({ name: "asc" })
//             .limit(resultsPerPage)
//             .skip(resultsPerPage * page)
//             .then((results) => {
//                 return res.status(200).send(results);
//             })
//             .catch((err) => {
//                 return res.status(500).send(err);
//             });
//     });
    
    

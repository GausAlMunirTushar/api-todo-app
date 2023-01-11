const todoModel = require('../models/todoModel');

exports.CreateTodo = (req, res) => {
	let reqBody = req.body;
        let TodoSubject  = reqBody["TodoSubject"]
        let TodoDescription = reqBody["TodoDescription"]
        let UserName = req.headers["username"]
        let TodoStatus = "New"
        let TodoCreateDate = Date.now()
        let TodoUpdateDate = Date.now()

        let postBody = {
                UserName: UserName,
                TodoSubject: TodoSubject,
                TodoDescription: TodoDescription,
                TodoStatus: TodoStatus,
                TodoCreateDate: TodoCreateDate,
                TodoUpdateDate: TodoUpdateDate
        }
	todoModel.create(postBody, (err, data) => {
		if (err) {
			res.status(400).json({ status: "fail", data: err });
		} else {
			res.status(200).json({ status: "success", data: data });
		}
	});
};



// Select Todo
exports.SelectTodo=(req,res)=>{
	let UserName= req.headers['username'];
	todoModel.find({UserName:UserName},(err,data)=>{
	  if(err){
	      res.status(400).json({status:"fail",data:err})
	  } 
	  else {
		res.status(200).json({ status: "success", data: data });
	  }
	})
    
    
    }

    // Update Todo
exports.UpdateTodo=(req,res)=>{
        let _id = req.body["_id"]
	let TodoSubject = req.body["TodoSubject"]
        let TodoDescription = req.body["TodoDescription"]
        let TodoUpdateDate = Date.now()
       
        let postBody = {
                TodoSubject: TodoSubject,
                TodoDescription: TodoDescription,
                TodoUpdateDate: TodoUpdateDate
        }
        todoModel.updateOne({_id:_id}, {$set: postBody}, {upsert: true}, (err,data)=>{
            if(err){
                res.status(400).json({status:"fail",data:err})
            } 
            else {
                res.status(200).json({ status: "success", data: data });
            }
        })
    }
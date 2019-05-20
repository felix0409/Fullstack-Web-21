const express = require('express');
const UserApiRouter = express.Router();
const UserModel = require('../model/users');

//get list user
UserApiRouter.get('/',(req,res) =>{
    UserModel.find({}, (err,users) => {
        if(err) res.json({success: false,err})
        else res.json({success: true,data: users});
    })
})

//Create user
UserApiRouter.post('/',(req,res) =>{
    UserModel.create(req.body,(err,userCreated) => {
        if(err) res.json({success: false,err})
        else res.json({success: true,data: userCreated});
    })
})
// Update user
UserApiRouter.put('/:id',(req,res) =>{
    const id = req.params.id;
    UserModel.findById(id,(err,userFound) => {
        if(err) res.json({success: false,err})
        else if(!userFound) res.json({success: false,err: 'Not found'})
        else{
            for(let key in req.body) // chay qua tung gia tri cua req.body
            {
                let value = req.body[key];
                if(value !== null) // so sanh ca kieu du lieu
                {
                    userFound[key] = value;
                }
            }
            userFound.save((err,userUpdated) => {
                if(err) res.json({success: false, err})
                else res.json({success: true,data: userUpdated})
            });
        }
    })
})
// Delete user
UserApiRouter.delete('/:id',(req,res) => {
    const id = req.params.id;

    UserModel.findByIdAndDelete(id,(err,userFound) => {
        if(err) res.json({success: false,err})
        else res.json({success:true});
    });
})
module.exports = UserApiRouter;

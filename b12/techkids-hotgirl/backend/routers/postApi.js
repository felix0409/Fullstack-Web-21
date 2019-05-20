const express = require('express');
const PostApiRouter = express.Router();
const PostModel = require('../model/post.js')

//get list post
PostApiRouter.get('/',(req,res) => {
    PostModel.find({},(err,posts) =>{
        if(err) res.json({success:false , err});
        else res.json({success:true, posts});
    })
})

// create post
PostApiRouter.post('/',(req,res) => {
    PostModel.create(req.body,(err,postCreated) => {
        if(err) res.json({success:false , err});
        else res.json({success: true,postCreated});
    })
})

//update post

PostApiRouter.put('/:id',(req,res) => {
    const id = req.params.id;
    PostModel.findById(id,(err,postFound) => {
        if(err) res.json({success:false,err})
        else if(!postFound) res.json({success:false,err: "NOT FOUND"})
        else
        {
            for(let key in req.body)
            {
                let value = req.body[key];
                if(value!==null)
                {
                    postFound[key] = null;
                }
            }
            userPost.save((err,userUpdated) => {
                if(err) res.json({success:false,err})
                else res.json({success:true},userUpdated)
            })
        }
    })
})

//delete post

PostApiRouter.delete('/:id',(req,res) => {
    const id = req.params.id;
    PostModel.findByIdAndDelete(id,(err,postFound) => {
        if(err) res.json({success:false,err})
        else res.json({success:true});
    })

})

module.exports = PostApiRouter;
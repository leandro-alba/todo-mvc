const Start = require('../models/Start')

module.exports = {
    getStart: async (req,res)=> {
        try{
            const startItems = await Start.find()
            res.render('start.ejs', {starts: startItems})
        }catch(err){
            console.log(err)
        }
    },
    createStart: async (req,res)=>{
        try{
            await Start.create({start: req.body.startItem})
            console.log('Comment added to start page')
            res.redirect('/start')
        }catch(err){
            console.log(err)
        }
    },
    deleteStart: async (req,res)=>{
        console.log(req.body.startIdFromJSFile)
        try{
            await Start.findOneAndDelete({_id:req.body.startIdFromJSFile})
            console.log('Comment deleted from start page')
            res.json('Yeeted')
        }catch(err){
            console.log(err)
        }
    }
}
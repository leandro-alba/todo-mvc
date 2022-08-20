const Pagethree = require('../models/Pagethree')

module.exports = {
    getPageThree: async (req,res)=>{
        try{
            const pagethreeItems = await Pagethree.find()
            res.render('pagethree.ejs', {pagethrees: pagethreeItems})
        }catch(err){
            console.log(err)
        }
    },
    createPagethree: async (req,res)=>{
        try{
            await Pagethree.create({pagethree: req.body.pagethreeItem})
            console.log('Comment added to pg.3')
            res.redirect('/pagethree')
        }catch(err){
            console.log(err)
        }
    },
    deletePagethree: async (req,res)=>{
        console.log(req.body.pagethreeIdFromJSFile)
        try{
            await Pagethree.findOneAndDelete({_id:req.body.pagethreeIdFromJSFile})
            console.log('Comment deleted from pg.3')
            res.json('Yeeted')
        }catch(err){
            console.log(err)
        }
    }
}
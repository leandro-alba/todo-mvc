const Pagetwo = require('../models/Pagetwo')

module.exports = {
    getPageTwo: async (req,res)=>{
        try{
            const pagetwoItems = await Pagetwo.find()
            res.render('pagetwo.ejs', {pagetwos: pagetwoItems})
        }catch(err){
            console.log(err)
        }
    },
    createPagetwo: async (req,res)=>{
        try{
            await Pagetwo.create({pagetwo: req.body.pagetwoItem})
            console.log('Comment added to pg.2')
            res.redirect('/pagetwo')
        }catch(err){
            console.log(err)
        }
    },
    deletePagetwo: async (req,res)=>{
        console.log(req.body.pagetwoIdFromJSFile)
        try{
            await Pagetwo.findOneAndDelete({_id:req.body.pagetwoIdFromJSFile})
            console.log('Comment deleted from pg.2')
            res.json('Yeeted')
        }catch(err){
            console.log(err)
        }
    }
}
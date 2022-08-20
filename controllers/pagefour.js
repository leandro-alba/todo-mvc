const Pagefour = require('../models/Pagefour')

module.exports ={
    getPageFour: async (req,res)=>{
        try{
            const pagefourItems = await Pagefour.find()
            res.render('pagefour.ejs', {pagefours: pagefourItems})
        }catch(err){
            console.log(err)
        }
    },
    createPagefour: async (req,res)=>{
        try{
            await Pagefour.create({pagefour: req.body.pagefourItem})
            console.log('Comment added to pg.4')
            res.redirect('/pagefour')
        }catch(err){
            console.log(err)
        }
    },
    deletePagefour: async (req,res)=>{
        console.log(req.body.pageFourIdFromJSFile)
        try{
            await Pagefour.findOneAndDelete({_id:req.body.pagefourIdFromJSFile})
            console.log('Comment deleted from pg.4')
            res.json('Yeeted')
        }catch(err){
            console.log(err)
        }
    }
}
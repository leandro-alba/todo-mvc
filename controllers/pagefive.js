const Pagefive = require('../models/Pagefive')

module.exports ={
    getPageFive: async (req,res)=>{
        try{
            const pagefiveItems = await Pagefive.find()
            res.render('pagefive.ejs', {pagefives: pagefiveItems})
        }catch(err){
            console.log(err)
        }
    },
    createPagefive: async (req,res)=>{
        try{
            await Pagefive.create({pagefive: req.body.pagefiveItem})
            console.log('Comment added to pg.5')
            res.redirect('/pagefive')
        }catch(err){
            console.log(err)
        }
    },
    deletePagefive: async (req,res)=>{
        console.log(req.body.pagefiveIdFromJSFile)
        try{
            await Pagefive.findOneAndDelete({_id:req.body.pagefiveIdFromJSFile})
            console.log('Comment deleted from pg.5')
            res.json('Yeeted')
        }catch(err){
            console.log(err)
        }
    }
}
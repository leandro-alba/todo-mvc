const express = require('express')
const app = express()
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todos')
const startRoutes = require('./routes/start')
const pagetwoRoutes = require('./routes/pagetwo')
const pagethreeRoutes = require('./routes/pagethree')
const pagefourRoutes = require('./routes/pagefour')
const pagefiveRoutes = require('./routes/pagefive')

const { emitWarningOnce } = require('mongodb/lib/utils')


require('dotenv').config({path: './config/.env'})

connectDB()// () calls the function, whenever we see () , its calling the function to do something 

app.set('view engine', 'ejs')//using our specific view engine, ejs
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())//these two lines 16 ,17. body parser, parse things out the body, so we can pull things out of the request.

app.use('/', homeRoutes)
app.use('/todos', todoRoutes)
app.use('/start', startRoutes)//what is mvc page
app.use('/pagetwo', pagetwoRoutes)//what is model page
app.use('/pagethree', pagethreeRoutes)//what is view page
app.use('/pagefour', pagefourRoutes)//what is controller page 
app.use('/pagefive', pagefiveRoutes)//putting it all together page

app.listen(process.env.PORT, ()=>{//we are using process.env.PORT setting up for deployment with heroku
    console.log('Server 📶📶📶')
})    
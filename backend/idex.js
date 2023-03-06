const express = require('express');
const mongoose = require('mongoose');
const {readdirSync} = require('fs')
const cors = require('cors')
const app = express()

//middleware
app.use(express.json())
app.use(cors())


//Db connection
mongoose.connect('mongodb+srv://Chukwudi:08094013203@cluster0.1nvfkik.mongodb.net/test', {
    useUnifiedTopology: true, 
}).then(()=> console.log('DB connected'))
.catch((err) => console.log('DB Connection Error',err))

// route middleware
readdirSync('./route').map((r) => app.use('/api', require(`./route/${r}`)))

const port = 8000
app.listen(port, () => console.log(`Server is running on port ${port}`))
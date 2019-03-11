const express = require('express');
const PORT = process.env.PORT || 4001;
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require('mongoose')
const app = express();
const TodoRouter = require('./api/routes/todoRoutes')
mongoose.connect('mongodb://localhost:27017/todo', {useNewUrlParser: true});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/api/todo', TodoRouter)

app.get('/', (req, res) => {
    res.json({
        meassage: 'Todod'
    })
})

app.listen(PORT, () => {
    console.log(`Server is runnig on port: ${PORT}`);
})
const express = require('express')
const cors = require('cors')


const app = express()

const corOptions = {
    origin : 'https://localhost:8081'
}



//middlewares
app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}))


//routers
const router = require('./routes/productRouter');
const reviewRouter = require('./routes/reviewRouter');

app.use('/api/products', router);
app.use('/api/reviews', reviewRouter);


app.get('/', (req,res) => {
    res.json({message: "success"})
})


//port
const PORT = process.env.PORT || 8081

//server
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})

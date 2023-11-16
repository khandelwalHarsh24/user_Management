const express=require('express');
const app=express();
const connectdb=require('./DB/connectDB');
require('dotenv/config'); 
const cors=require('cors');

app.use(cors());
app.use('*',cors());

app.use(express.json());

const userRoutes=require('./routes/userRoute');
app.use('',userRoutes);


const start=async ()=>{
    try {
        await connectdb(process.env.URL);
        app.listen(3000,console.log(`Server Listening To The Port ${3000}`));
    } catch (error) {
        console.log(error);
    }
}

start();
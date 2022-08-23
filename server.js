import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import  userRoutes  from './routes/usersRoute.js';

const app = express();


app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', userRoutes);

app.use(
    cors({ 
        Origin: 'http://localhost:5000', 
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders: [
            'Content-Type', 
            'Authorization', 
            'Origin', 
            'x-access-token', 
            'XSRF-TOKEN'
        ], 
        preflightContinue: false
    })
  );

const CONNECTION_URL = 'mongodb+srv://admin:admin@cluster0.yf65c.mongodb.net/jenkinsUser?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
        .catch((error) => console.log(error.message));
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const {userRouter, containerRouter, stageRouter} = require("./router");
const configs = require('./configs/configs');
mongoose.set('strictQuery', false);

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(function(req, res, next) {  //  обойти политику CORS, из за которой браузер блокирует запрос
    res.header("Access-Control-Allow-Origin", "*"); // с одного домена (фронт) на другой (бэк)
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // разрешаем серверу использование методов
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use('/users', userRouter)
app.use('/containers', containerRouter)
app.use('/stages', stageRouter)

app.use((err, req, res, next) => {

    res.status(err.status || 500).json({
        message: err.message || 'Unknown error',
        status: err.status || 500
    });
});

app.listen(configs.PORT, async () => {
    console.log(`Server listen ${configs.PORT}`);

    await mongoose.connect(configs.MONGO_URL);
})


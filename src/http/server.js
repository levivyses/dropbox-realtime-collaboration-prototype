const express=require('express');module.exports=function createHttpServer(){const app=express();app.use(express.json());app.use(express.static('frontend'));return app}

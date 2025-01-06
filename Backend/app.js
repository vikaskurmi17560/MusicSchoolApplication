const express=require("express");
const dotenv=require("dotenv");
const cors=require("cors")
const app=express();
app.use(cors());

app.use(express.json());
dotenv.config();

module.exports=app;
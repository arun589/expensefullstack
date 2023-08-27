const path=require('path');
const express=require('express');
const bodyParser = require('body-parser');
const sequelize=require('./util/database');
const user=require("./model/user");
const app=express();
const cors=require('cors');
app.use(cors());
const expenserouter=require('./routes/expense')
app.use(bodyParser.json({extended:false}));
app.use(expenserouter);
sequelize.sync()
.then(res=>console.log("done"))
.catch(err=>console.log(err));
app.listen(4000)
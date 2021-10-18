const express= require('express');
const app = express();

app.get('/addcustomer', (req, res) =>{
    res.render('add_customer');
});

//Home Page rendering
app.get('/',(req,res)=>{
    res.render('home');
});

app.get('/profile',(req,res)=>{
    res.render('profile');
});

app.get('/updateprofile',(req,res)=>{
    res.render('update_customer');
});

app.get('/deletecustomer',(req,res)=>{
    res.render('delete_customer');
});

app.get('/deletecustomers',(req,res)=>{
    res.render('delete_customers');
});

module.exports = app;
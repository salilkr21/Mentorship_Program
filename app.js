const express = require('express');
const route = require('./routes/route');
var bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', require('./pages'));
app.set('view engine','ejs');
 

//API to get details of all the customers
app.get('/customers', route.getCustomers);

//API to get details of a specific customer
app.post('/customerbyid', route.getCustomerById);

//API to add a new customer
app.post('/register', route.addNewCustomer);

//API to update the deatils of an existing customer
app.post('/updatecustomer', route.updateCustomerById);

//API to delete a specific customer
app.post('/removecustomer', route.deleteCustomerById);

//API to delete all the customers
app.post('/removecustomers', route.deleteAllCustomers);

app.listen(process.env.APP_PORT, () => {
    console.log("listening to port" + process.env.APP_PORT);
});
const express = require('express');
const route = require('./routes/route');
var bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
 

//API to get details of all the customers
app.get('/customers', route.getCustomers);

//API to get details of a specific customer
app.get('/customer/:id', route.getCustomerById);

//API to add a new customer
app.post('/addcustomer', route.addNewCustomer);

//API to update the deatils of an existing customer
app.put('/updatecustomers/:id', route.updateCustomerById);

//API to delete a specific customer
app.delete('/removecustomer/:id', route.deleteCustomerById);

//API to delete all the customers
app.delete('/removecustomers', route.deleteAllCustomers);

app.listen(process.env.APP_PORT, () => {
    console.log("listening to port" + process.env.APP_PORT);
});
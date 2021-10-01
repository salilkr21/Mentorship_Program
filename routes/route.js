const dbconn = require('../config/config');

module.exports.getCustomers = function (req, res) {
    db_query = "SELECT * FROM tb_customers";
    dbconn.query(db_query, [], function (err, result) {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });

}
module.exports.getCustomerById = function (req, res) {
    const customer_id = req.params.id;
    values = [customer_id];
    db_query = "SELECT * FROM tb_customers where customer_id=?";
    dbconn.query(db_query, values, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
}
module.exports.addNewCustomer = function (req, res) {
    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;
    const phone_number = req.body.phone_number;
    const db_query = "INSERT INTO tb_customers(name, age, email, phone_number) VALUES(?,?,?,?)";
    values = [name, age, email, phone_number];
    dbconn.query(db_query, values, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            res.send("Customer added successfully");
            
        }
    });
}

module.exports.updateCustomerById = function (req, res) {
    const customer_id = req.body.customer_id;
    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;
    const phone_number = req.body.phone_number;
    const db_query = "UPDATE tb_customers SET name=?, age=?, email=?, phone_number=? where customer_id=?";
    values = [name, age, email, phone_number, customer_id];
    dbconn.query(db_query, values, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            res.send("Customer updated successfully");
        }
    });
}

module.exports.deleteCustomerById = function (req, res) {
    const customer_id = req.params.id;
    const db_query = "DELETE FROM tb_customers where customer_id=?";
    values = [customer_id];
    dbconn.query(db_query, values, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            res.send(`customer with customer id ${customer_id} is deleted successfully`);
        }
    });
}

module.exports.deleteAllCustomers = function (req, res) {
    const db_query = "DELETE FROM tb_customers";
    const values = [];
    dbconn.query(db_query, values, function (err, result) {
        if (err) {
            console.log(err);
        } else {
            res.send(`All customers deleted successfully`);
        }


    });
}
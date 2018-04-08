var connection = require("../config/connection.js");

// var tableName = "burgers";


var orm = {

    selectAll: function (tableName, cb) {
        connection.query("SELECT * FROM " + tableName + ";", function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function (tableName, val, cb) {
        //var burg = burger.name.replace(/\s+/g, "").toLowerCase();
        connection.query("INSERT INTO " + tableName + " (burger_name) VALUES ('" + val + "');", function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },

    updateOne: function (tableName, condition, cb) {
        connecion.query("UPDATE " + tableName + "SET devoured=true WHERE id= " + condition + ";", function (err, result) {
            if (err) throw err;
            cb(result)
        })
    }

};


module.exports = orm;
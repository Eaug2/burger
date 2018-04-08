var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    create: function (name, cb) {
        orm.insertOne("burgers", name, cb);
    },

    update: function (id, cb) {
        orm.updateOne("burgers", id, cb);
    }
};

module.exports = burger;
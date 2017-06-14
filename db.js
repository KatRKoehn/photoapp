"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var connectionString = 'mongodb://Codergirl:Code123@ds163181.mlab.com:63181/dhd-cc-u4';
var mongodb = require("mongodb");
var Database = (function () {
    function Database() {
    }
    Database.connect = function () {
        var _this = this;
        return mongodb.MongoClient.connect(connectionString).then(function (db) {
            _this.db = db;
        }).catch(function (err) {
            console.error(err);
        });
    };
    return Database;
}());
exports.default = Database;

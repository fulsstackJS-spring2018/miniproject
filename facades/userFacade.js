var mongoose = require("mongoose");
var User = require("../models/user");

function getAllUsers(){
   return User.find({}).exec();
}

function addUser(firstName,lastName,userName,password){
  //TBD
  return null;
}

function findByUsername(username){
  return User.findOne({userName:username}).exec();
}

module.exports = {
  getAllUsers: getAllUsers,
  addUser: addUser,
  findByUsername: findByUsername
}
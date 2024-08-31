const express =require("express");
const route =express.Router();

const {handleGetAllUsers, 
  handleGetUserById, 
  handleUpdateUserById,
  handleDeleteUserUserById,
  handleCreateNewUser} =require('../controller/user')
  
  route.route('/')
  .get(handleGetAllUsers)
  .post(handleCreateNewUser);
  
  route.route('/:id')
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserUserById);

  
  module.exports =route; 
const express = require('express');

const { getElementById, getIndexById, updateElement, createElement } = require('./utils');

let userProfile = [];

userRouter = express.Router();

// Get a single activity
userRouter.get('/:user-id', (req, res, next) => {
  const selectedUser = getElementById(req.params.id, userProfile);
  if (selectedUser) {
    res.send(selectedUser);
  } else {
    res.status(404).send();
  }
});

// Update an user profile
userRouter.put('/:id', (req, res, next) => {
  const userIndex = getIndexById(req.params.id, userProfile);
  if (userIndex !== -1) {
    updateElement(req.params.id, req.query, userProfile);
    res.send(userProfile[userIndex]);
  } else {
    res.status(404).send();
  }
});


// Delete an expression
userRouter.delete('/:id', (req, res, next) => {
  const userIndex = getIndexById(req.params.id, userProfile);
  if (userIndex !== -1) {
    userProfile.splice(userIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

module.exports = userRouter;
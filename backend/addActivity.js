const express = require('express');

const { getElementById, getIndexById, updateElement, createElement } = require('./utils');

let activityLists = [];

addActivityRouter = express.Router();

// Get all expressions
addActivityRouter.get('/', (req, res, next) => {
  res.send(activityLists);
});

// Get a single activity
addActivityRouter.get('/:id', (req, res, next) => {
  const selectedActivity = getElementById(req.params.id, expressions);
  if (selectedActivity) {
    res.send(selectedActivity);
  } else {
    res.status(404).send();
  }
});

// Update an activity
addActivityRouter.put('/:id', (req, res, next) => {
  const activityIndex = getIndexById(req.params.id, activityLists);
  if (activityIndex !== -1) {
    updateElement(req.params.id, req.query, activityLists);
    res.send(activityLists[activityIndex]);
  } else {
    res.status(404).send();
  }
});

// Create an activity
addActivityRouter.post('/', (req, res, next) => {
  const receivedActivity = createElement('eactivitylists', req.query);
  if (receivedActivity) {
    activityLists.push(receivedActivity);
    res.status(201).send(receivedActivity);
  } else {
    res.status(400).send();
  }
});

// Delete an expression
addActivityRouter.delete('/:id', (req, res, next) => {
  const activityIndex = getIndexById(req.params.id, activityLists);
  if (activityIndex !== -1) {
    activityLists.splice(activityIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

module.exports = addActivityRouter;
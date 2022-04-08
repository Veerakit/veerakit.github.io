const express = require('express');

const { getElementById, getIndexById, updateElement, createElement } = require('./utils');

let activityLists = [];

activityListsRouter = express.Router();

// Get all expressions
activityListsRouter.get('/', (req, res, next) => {
  res.send(activityLists);
});

// Get a single activity
activityListsRouter.get('/:id', (req, res, next) => {
  const selectedActivity = getElementById(req.params.id, activityLists);
  if (selectedActivity) {
    res.send(selectedActivity);
  } else {
    res.status(404).send();
  }
});

// Update an activity
activityListsRouter.put('/:id', (req, res, next) => {
  const activityIndex = getIndexById(req.params.id, activityLists);
  if (activityIndex !== -1) {
    updateElement(req.params.id, req.query, activityLists);
    res.send(activityLists[activityIndex]);
  } else {
    res.status(404).send();
  }
});

// Create an activity
activityListsRouter.post('/', (req, res, next) => {
  const receivedActivity = createElement('activitylists', req.query);
  if (receivedActivity) {
    activityLists.push(receivedActivity);
    res.status(201).send(receivedActivity);
  } else {
    res.status(400).send();
  }
});

// Delete an expression
activityListsRouter.delete('/:id', (req, res, next) => {
  const activityIndex = getIndexById(req.params.id, activityLists);
  if (activityIndex !== -1) {
    activityLists.splice(activityIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
});

module.exports = activityListsRouter;
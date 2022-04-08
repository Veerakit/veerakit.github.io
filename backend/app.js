// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.listen(port, () => {
//     console.log(`Listening at http://localhost:${port}`);
// });

const express = require('express');
const app = express();

const { getElementById, getIndexById, updateElement, createElement } = require('./utils');

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
app.use(express.static('public'));

// Import and mount the expressionsRouter
const activityListsRouter = require('./activityList');
const addActitivtyRouter = require('./addActivity');
const userRouter = require('./user');

app.use('/users/:user-id/activities', activityListsRouter);
app.use('/users/:user-id/activities/:activity-id/records', addActitivtyRouter);
app.use('/users', userRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

router.get('/', storeController.homePage);

// basic routes without controller code
// router.get('/', (req, res) => {
//   // res.send('Hey! It works again!');

//   // const person = { name: "joe", age: 48, cool: true };
//   // res.json(person);

//   // const nameFromQuery = req.query.name;
//   // res.send(`nameFromQuery: ${nameFromQuery}`);

//   // pass query parameters directly to json response
//   // res.json(req.query);

//   res.render('hello', {
//     title: "Hello test",
//     name: "Joe",
//     dog: "Buddy",
//   });
// });

// router.get('/reverse/:name', (req, res) => {
//   const reverse = [...req.params.name].reverse().join('');
//   res.send(reverse);
// });

module.exports = router;

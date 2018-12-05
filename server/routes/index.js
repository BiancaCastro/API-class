const express = require('express');

const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.use('/api', require('./api/project-routes'));

router.use('/api', require('./api/task-routes'));

module.exports = router;

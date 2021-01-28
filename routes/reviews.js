const express = require('express');

const { getReviews } = require('../controllers/reviews');

const Review = require('../models/Review');

// mergeParams:
// Preserve the req.params values from the parent router.
// If the parent and the child have conflicting param names, the child’s value take precedence.
const router = express.Router({ mergeParams: true });

const advancedResults = require('../middleware/advancedResults');
const { protect, authorize } = require('../middleware/auth');

router.route('/').get(
  advancedResults(Review, {
    path: 'bootcamp',
    select: 'name description',
  }),
  getReviews
);

module.exports = router;

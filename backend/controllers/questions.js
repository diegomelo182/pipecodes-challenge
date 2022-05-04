var express = require('express');
var router = express.Router();

const QuestionModel = require('../models/question');

/* GET questions listing. */
router.get('/', async function(req, res, _next) {
  const { query, limitSkip } = filterBuilder(req.query);
  const data = await QuestionModel.find(
    query,
    null,
    { ...limitSkip, order: { _id: -1 } },
  ).exec();

  res.json(data);
});

/* POST create questions. */
router.post('/', async function(req, res, _next) {
  const { body } = req;
  const question = new QuestionModel(body);
  const validation = question.validateSync();

  if (Object.keys(validation?.errors || {}).length > 0) {
    return res.status(400).json({ errors: validation.errors });
  }

  const result = await question.save();

  res.status(201).json({ created: result });
});

function filterBuilder(values) {
  let filters = { query: {}, limitSkip: { limit: 20 } };
  const { page = 0, id } = values;

  if (page)
    filters['limitSkip'] = paginationBuilder(page, filters['limitSkip']['limit']);
  if (id) filters['query'] = { _id: id };

  return filters;
};

function paginationBuilder(page, limit) {
  let skip = 0;
  if (page > 1) {
    skip = (+page - 1) * parseInt(limit);
  }
  return { limit, skip };
};

module.exports = router;

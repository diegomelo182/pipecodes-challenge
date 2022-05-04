var indexRouter = require('./controllers/index');
var questionsRouter = require('./controllers/questions');

module.exports = function(app) {
  app.use('/', indexRouter);
  app.use('/questions', questionsRouter);
};

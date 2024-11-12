// Controller for index route

function indexPage (req, res) {
  res.render('index', {title: 'Index Page'});
}

module.exports = {
  indexPage
}
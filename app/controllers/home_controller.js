var Home = {
  index: function(request, response) {
    response.render('index', { title: 'Million' });
  }
}

module.exports = Home
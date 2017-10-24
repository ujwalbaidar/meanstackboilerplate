const path = require('path');

module.exports = function(app){
	app.route('*')
		.get((req, res) => {
			res.render('index');
		});
}

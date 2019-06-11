module.exports = (app) => {
	app.get('/home', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.render('index');
});

app.get('/home/sobre', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
    res.render('sobre');
});

app.get('/home/contato', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
    res.render('contato');
});
	
app.get('/home/faleconosco/new', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
	res.render('new');

});


//Routes Show Page
app.get('/home/website', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.render('website');
});

app.get('/home/emailmarketing', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.render('emailmarketing');
});

app.get('/home/landingpage', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.render('landingpage');
});

app.get('/home/dashboard', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');
	res.render('dashboard');
});
	
};



const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const Home       = require('./Routes/home');
const consign    = require('consign');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

consign().include('Routes').into(app);

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.redirect('/home');
});

app.listen(4000, () => {
    console.log('Server has started nigga!');
});
     











         
const express = require('express')
const stripe = require("stripe")("sk_test_p8gYKmKYtgfRNNXpO6EgH30F00cJ7UnCVM");
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')

const app = express()

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`) 
});

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(`${__dirname}/pu blic`));

app.get('/', (req, res) => {
    res.render('index');
})